const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const messageRoutes = require("./routes/messages");
const socket = require("socket.io");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/authRoutes");
const app = express();
require("dotenv").config();

app.use(cors(
    {
        origin : process.env.CLIENT_URL,
        credentials : true
    }
));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,useUnifiedTopology: true,})
.then(() => {
  console.log("Connected to MongoDB successfully!");
})
.catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
});

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started on Port ${process.env.PORT}` );
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});