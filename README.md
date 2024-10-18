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

- <span style="color:#3498db;">**Login**</span>: Secure user authentication using bcrypt.
- <span style="color:#2ecc71;">**User Registration**</span>: Register users with encrypted credentials.
- <span style="color:#e74c3c;">**Post Listings**</span>: Display posts related to the user's selected stacks.
- <span style="color:#f39c12;">**Create & Edit Posts**</span>: Users can publish and modify content.
- <span style="color:#9b59b6;">**Search**</span>: Search functionality for posts, users, and topics.
- <span style="color:#e67e22;">**Like & Comment**</span>: Interact with others by liking and commenting on posts.
- <span style="color:#1abc9c;">**Delete Posts**</span>: Allow users to delete their posts.
- <span style="color:#d35400;">**Stacks Selection**</span>: Users can select relevant development stacks for their profile.
- <span style="color:#34495e;">**Profiles Listing**</span>: Filter user profiles by the stacks they’ve selected.
- <span style="color:#e84393;">**Saved Posts**</span>: Save posts for future reading.
- <span style="color:#2c3e50;">**Chat**</span>: Users can communicate via private messages.
- <span style="color:#2980b9;">**Logout**</span>: Securely log users out of the platform.

### Non-Functional Requirements

- <span style="color:#9b59b6;">**Performance**</span>: Ensure response times of less than 3 seconds for operations.
- <span style="color:#e67e22;">**Availability**</span>: Provide 24/7 platform access with minimal interruptions.
- <span style="color:#2ecc71;">**Security**</span>: Ensure that only authenticated users access features.
- <span style="color:#3498db;">**Usability**</span>: Provide a simple, intuitive user interface.
- <span style="color:#e74c3c;">**Scalability**</span>: Support new users and features without performance loss.
- <span style="color:#34495e;">**Maintainability**</span>: Ensure modular, well-documented code for easy maintenance.
- <span style="color:#f39c12;">**Compatibility**</span>: Ensure cross-browser and device compatibility with a responsive design.

### Business Rules

- <span style="color:#9b59b6;">**User Authentication**</span>: Use bcrypt for secure login.
- <span style="color:#e67e22;">**Duplicate Registration**</span>: Prevent registration if the email is already in use.
- <span style="color:#2ecc71;">**Post Validation**</span>: Disallow incomplete or incorrect posts.
- <span style="color:#3498db;">**Edit Logging**</span>: Track and log the user and timestamp for edited posts.
- <span style="color:#e74c3c;">**Stack Filtering**</span>: Display posts and profiles based on user-selected stacks.
- <span style="color:#34495e;">**Like Limit**</span>: Users cannot like the same post more than once.

### Constraints

- <span style="color:#2980b9;">**Operating System**</span>: Minimum requirement is Windows 10.
- <span style="color:#f39c12;">**Storage**</span>: The system must provide flexible storage options for scalability.

---

### Group Members
- Gabriel Coral
- Gabriel Demétrio
- Paulo Oliveira
- Pedro H. Alves
- Richard Passarelli
- Vinícius Vieira
- 
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

### Registration Screen

<img alt="" src="/Assets/TelaCadastro.png">

### Email Varification

<img alt="" src="/Assets/Email.png">

### User Validation Screen

<img alt="" src="/Assets/TelaValidacaoUsuario.png">

### Login Screen

<img alt="" src="/Assets/TelaLogin.png">

## Posts Flow

### Home Screen

<img alt="" src="/Assets/TelaHome.png">

### Feed Screen

<img alt="" src="/Assets/TelaFeed.png">

### Posting Screen

<img alt="" src="/Assets/TelaPostagem.png">

### Search Screen

<img alt="" src="/Assets/TelaPesquisa.png">

### Opened Post Screen

<img alt="" src="/Assets/PostagemAberta.png">

### Notifications Screen

<img alt="" src="/Assets/TelaNotificacao.png">

## User Flow

### User Screen

<img alt="" src="/Assets/telaUsuario.png">

### Bio Screen

<img alt="" src="/Assets/TelaSobre.png">

### Saved Posts Screen

<img alt="" src="/Assets/TelaSalvos.png">

### Statistics Screen

<img alt="" src="/Assets/TelaEstatisticas.png">

## Edition Flow

### User Edition Screen

<img alt="" src="/Assets/TelaEdicaoUsuario.png">

### Bio Edition Screen

<img alt="" src="/Assets/TelaEdicaoBio.png">

### Password Edition Screen

<img alt="" src="/Assets/TelaEdicaoSenha.png">

## Chat

### Chat Screen

<img alt="" src="/Assets/TelaChat.png">
