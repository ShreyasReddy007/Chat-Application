# PingPal – Real-Time Chat Application

PingPal is a modern, full-stack real-time chat application, enabling registered users to chat instantly with other users, manage avatars, and access a smooth, responsive chat experience.

---

## 🚀 Features

- **User Authentication:** Secure registration, login, and persistent local sessions using JWT and bcrypt for password hashing.  
- **Profile Avatars:** Avatar selection via Multiavatar API. Avatars are stored and displayed using base64 encoding.  
- **Real-Time Messaging:** Instant, bi-directional chat with Socket.io; online presence indication.  
- **Modern UI/UX:** Responsive, stylish interface with contacts list, chat windows, and emoji picker.  
- **RESTful API:** Express.js backend with endpoints for authentication, user profiles, avatar updates, and messages.  
- **Robust Validation:** Form validation, error toast notifications, and backend error handling.  
- **Emoji Support:** Integrated emoji-picker for fun, light-hearted expressive chats.  
- **State Management:** Seamless UI state synchronization with React hooks.

---

## 🛠️ Tools & Technologies Used

- **Frontend:** React.js, styled-components, emoji-picker-react, axios, react-toastify  
- **Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, dotenv, cors  
- **Real-Time:** Socket.io (client & server)  
- **Other:** Multiavatar API for avatar generation

---

## 📦 Folder Structure

```
PingPal/
├── chat-app/
│   ├── public/
│   ├── src/
│   │   ├── assets/           # Logos, images, loaders
│   │   ├── components/       # Contacts, Logout, Welcome, ChatInput, ChatContainer
│   │   ├── pages/            # Home, Login, Register, Chat, SetAvatar
│   │   ├── utils/            # API routes
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
├── server/
│   ├── controllers/          # User and message controllers
│   ├── model/                # Mongoose schemas for users and messages
│   ├── routes/               # API route handlers
│   ├── index.js              # Main server file
│   ├── .env
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚡ Getting Started  

Follow the steps below to run PingPal locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ShreyasReddy007/Chat-Application.git
cd Chat-Application
```

### 2️⃣ Install Dependencies

#### Backend setup

```bash
cd server
npm install
```

#### Frontend setup

```bash
cd ../public
npm install
```

### 3️⃣ Run the Application

Open two terminal windows/tabs and run the following commands:

#### Terminal 1 - Backend

```bash
cd server
npm start
```

#### Terminal 2 - Frontend

```bash
cd ../public
npm start
```

### 4️⃣ Open in Browser

Visit [http://localhost:3000](http://localhost:3000) to access the application.

---

## 🔐 Environment Variables Setup  

Create a `.env` file inside the `server/` directory with the following content:

```
PORT=4000
MONGO_URL=your_mongodb_connection_string_here
CLIENT_URL=http://localhost:3000
```

---

## 📝 Usage Overview

1. **Register** for a new account with username, email, and password.  
2. **Set an Avatar** using the avatar selector powered by Multiavatar API.  
3. **Chat** with other users in real-time with instant message delivery and online presence.  
4. Use the **Emoji Picker** to add emojis to your messages.  
5. **Logout** safely to clear your session.

---

## 📷 Screenshots

- Welcome / Home Page
<img width="1274" height="715" alt="Screenshot 2025-08-01 at 16 16 13" src="https://github.com/user-attachments/assets/c00bda97-fe2c-4b10-b7a2-6145fc731ee0" />

- Registration Page
<img width="1234" height="697" alt="Screenshot 2025-08-01 at 16 16 25" src="https://github.com/user-attachments/assets/3076bffb-b4b1-4dfe-85d9-928fd76d5b7f" />

- Login Page
<img width="1234" height="697" alt="image" src="https://github.com/user-attachments/assets/af6caf5a-7320-4a43-902d-3b4a8de04769" />

- Avatar Selection Page
<img width="1234" height="697" alt="image" src="https://github.com/user-attachments/assets/56cd7f95-6957-4987-86a3-baa82aad125d" />

- Chat Interface 
<img width="1234" height="697" alt="Screenshot 2025-08-01 at 16 19 11" src="https://github.com/user-attachments/assets/0577f073-4a88-4f0a-bd9b-95c048631a66" />

---

## 🤝 Contribution

Contributions and feedback are welcome! Please fork the repo and open pull requests for improvements or bug fixes. For major features, open an issue first.

---

**Happy chatting with PingPal!** 🚀
