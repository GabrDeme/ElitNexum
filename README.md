# Elit Nexum

**Elit Nexum** is a social network tailored for IT professionals, designed to facilitate connections, knowledge sharing, and collaboration within the tech community. The platform allows users to register via email, select their development stacks (technologies), and interact through posts, comments, and likes. With features such as chat, saved posts, and stack-filtered profile listing, Elit Nexum aims to build a thriving community of developers.

## Overview

**Elit Nexum** addresses the need for a platform that brings IT professionals together. With the rapid growth of new technologies and development stacks, professionals face challenges in connecting, sharing knowledge, and collaborating. Elit Nexum fills this gap by offering a space for IT professionals to engage with like-minded peers and stay updated on relevant content.

## Solution

The **Elit Nexum** platform provides a comprehensive solution by offering a secure, scalable, and user-friendly social network that supports interaction between tech professionals. By integrating user authentication, post creation, and stack-based content filtering, Elit Nexum enhances collaboration and knowledge sharing.

### Objectives

- **Facilitate Connections**: Offer a platform where IT professionals can connect with peers who share similar technical stacks.
- **Promote Knowledge Sharing**: Allow users to post content and engage in discussions around their chosen technologies.
- **Foster Collaboration**: Enable interactions such as liking and commenting on posts, building a collaborative tech community.
- **Enhance Interaction**: Provide additional features like chat, saved posts, and filtered profile lists based on user-selected stacks.

---

### Functional Requirements

- **Login**: Secure user authentication using bcrypt.
- **User Registration**: Register users with encrypted credentials.
- **Post Listings**: Display posts related to the user's selected stacks.
- **Create & Edit Posts**: Users can publish and modify content.
- **Search**: Search functionality for posts, users, and topics.
- **Like & Comment**: Interact with others by liking and commenting on posts.
- **Delete Posts**: Allow users to delete their posts.
- **Stacks Selection**: Users can select relevant development stacks for their profile.
- **Profiles Listing**: Filter user profiles by the stacks they’ve selected.
- **Saved Posts**: Save posts for future reading.
- **Chat**: Users can communicate via private messages.
- **Logout**: Securely log users out of the platform.

### Non-Functional Requirements

- **Performance**: Ensure response times of less than 3 seconds for operations.
- **Availability**: Provide 24/7 platform access with minimal interruptions.
- **Security**: Ensure that only authenticated users access features.
- **Usability**: Provide a simple, intuitive user interface.
- **Scalability**: Support new users and features without performance loss.
- **Maintainability**: Ensure modular, well-documented code for easy maintenance.
- **Compatibility**: Ensure cross-browser and device compatibility with a responsive design.

### Business Rules

- **User Authentication**: Use bcrypt for secure login.
- **Duplicate Registration**: Prevent registration if the email is already in use.
- **Post Validation**: Disallow incomplete or incorrect posts.
- **Edit Logging**: Track and log the user and timestamp for edited posts.
- **Stack Filtering**: Display posts and profiles based on user-selected stacks.
- **Like Limit**: Users cannot like the same post more than once.

### Constraints

- **Operating System**: Minimum requirement is Windows 10.
- **Storage**: The system must provide flexible storage options for scalability.

---

### Group Members
- <a href="https://www.linkedin.com/in/gabriel-russo-173ba3275/" target="_blank">Gabriel Coral</a>
- <a href="https://www.linkedin.com/in/gabriel-dem%C3%A9trio-a06820275/" target="_blank">Gabriel Demétrio</a>
- <a href="https://www.linkedin.com/in/paulohgo/" target="_blank">Paulo Oliveira</a>
- <a href="https://www.linkedin.com/in/pedro-henrique-alves-de-freitas-287b85276/" target="_blank">Pedro H. Alves</a>
- <a href="https://www.linkedin.com/in/richardrichk/" target="_blank">Richard Passarelli</a>
- <a href="https://www.linkedin.com/in/vinicius-andrade-981a9626b/" target="_blank">Vinícius Vieira</a>

---

### Architecture Overview

The architecture of **Elit Nexum** is divided into two main layers:

- **Frontend**: Developed using ReactJS for a dynamic user interface, styled with Tailwind CSS to ensure a responsive, mobile-friendly design.
- **Backend**: Built with Node.js and Express to provide a robust API and handle business logic. MongoDB is used as the database for efficient storage of user data, posts, comments, and interactions.

The frontend communicates with the backend through API calls to handle user interactions, which are then processed and stored in MongoDB, ensuring a fluid and responsive user experience.

## Technologies

- **Frontend**:
  - ReactJS
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express
- **Database**:
  - MongoDB

---

# Project Flow

## Login Flow

**Registration Screen**

<img alt="" src="/Assets/TelaCadastro.png">

**Email Varification**

<img alt="" src="/Assets/Email.png">

**User Validation Screen**

<img alt="" src="/Assets/TelaValidacaoUsuario.png">

**Login Screen**

<img alt="" src="/Assets/TelaLogin.png">

## Posts Flow

**Home Screen**

<img alt="" src="/Assets/TelaHome.png">

**Feed Screen**

<img alt="" src="/Assets/TelaFeed.png">

**Posting Screen**

<img alt="" src="/Assets/TelaPostagem.png">

**Search Screen**

<img alt="" src="/Assets/TelaPesquisa.png">

**Opened Post Screen**

<img alt="" src="/Assets/PostagemAberta.png">

**Notifications Screen**

<img alt="" src="/Assets/TelaNotificacao.png">

## User Flow

**User Screen**

<img alt="" src="/Assets/telaUsuario.png">

**Bio Screen**

<img alt="" src="/Assets/TelaSobre.png">

**Saved Posts Screen**

<img alt="" src="/Assets/TelaSalvos.png">

**Statistics Screen**

<img alt="" src="/Assets/TelaEstatisticas.png">

## Edition Flow

**User Edition Screen**

<img alt="" src="/Assets/TelaEdicaoUsuario.png">

**Bio Edition Screen**

<img alt="" src="/Assets/TelaEdicaoBio.png">

**Password Edition Screen**

<img alt="" src="/Assets/TelaEdicaoSenha.png">

## Chat

**Chat Screen**

<img alt="" src="/Assets/TelaChat.png">

## You can also find in

<div height="30">
  <a href="https://www.linkedin.com/in/gabriel-dem%C3%A9trio-a06820275/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
