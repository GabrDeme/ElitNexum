const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User.model');
const Profile = require('../models/Profile.model');
const Follower = require('../models/Follower.model');
const Notification = require('../models/Notification.model');
const Chat = require('../models/Chat.model');
const upload = require('../middleware/imageUpload.middleware');

// @route:  POST /api/onboarding/:token
// @desc:   Verifica o email e continua a integração do usuário
router.post('/:token', upload.single('profilePic'), async (req, res) => {
  const { token } = req.params;
  const { bio, techStack, social } = req.body;
  const { github, linkedin, website, twitter, instagram, youtube } =
    JSON.parse(social);

  const verificationToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  try {
    // Encontra o usuário com o token
    const user = await User.findOne({ verificationToken });
    if (!user) {
      return res.status(400).json({ msg: 'Token inválido ou expirado.' });
    }

    // Define status de verificação do usuário
    user.isVerified = true;
    user.verificationToken = undefined;
    if (req.file) user.profilePicUrl = req.file.path;
    await user.save();

    // Cria o perfil do usuário
    let profileFields = {};
    profileFields.user = user._id;
    profileFields.bio = bio;
    profileFields.techStack = JSON.parse(techStack);
    profileFields.badges = [];

    profileFields.social = {};
    if (github) profileFields.social.github = github;
    if (website) profileFields.social.website = website;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (youtube) profileFields.social.youtube = youtube;

    await new Profile(profileFields).save();

    // Inicializa seguidores
    await new Follower({ user: user._id, followers: [], following: [] }).save();

    // Inicializa notificações
    await new Notification({ user: user._id, notifications: [] }).save();

    // Inicializa chats
    await new Chat({ user: user._id, chats: [] }).save();

    // Retorna JWT
    jwt.sign({ userId: user._id }, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      res.status(200).json({
        msg: 'Usuário verificado e integrado.',
        token,
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro no servidor.' });
  }
});

module.exports = router;