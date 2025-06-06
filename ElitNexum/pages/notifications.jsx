import axios from 'axios';
import cookie from 'js-cookie';
import { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { dehydrate } from 'react-query/hydration';
import { QueryClient, useQuery } from 'react-query';
import NotificationItem from '../components/NotificationItem';
import baseURL from '../utils/baseURL';

const getNotifications = async (token) => {
  const { data } = await axios.get(`${baseURL}/api/notifications`, {
    headers: { Authorization: token },
  });
  return data;
};

const NotificationsPage = () => {
  const { data } = useQuery(['notifications'], () =>
    getNotifications(cookie.get('token'))
  );

  useEffect(() => {
    const setNotificationsToRead = async () => {
      try {
        await axios.post(
          `${baseURL}/api/notifications`,
          {},
          { headers: { Authorization: cookie.get('token') } }
        );
      } catch (error) {
        console.log(error);
      }
    };
    setNotificationsToRead();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 md:py-10">
      <h1 className="text-xl text-deepviolet font-inconsolata font-semibold mb-8">
        Suas Notificações
      </h1>
      <div className="flow-root">
        <ul className="-mb-8">
          {data.map((notification, index) => (
            <NotificationItem
              key={index}
              id={index}
              notification={notification}
              index={index}
              length={data.length}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['notifications'], () =>
    getNotifications(token)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      title: 'Notificações - Elit Nexum',
    },
  };
}

export default NotificationsPage;
