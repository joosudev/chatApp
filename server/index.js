const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
app.use(cors());

const publicDirectoryPath = path.join(__dirname, '../client');
app.use(express.static(publicDirectoryPath));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);
  socket.on("message", (message) => {
    console.log("message:", message);
    io.emit("message", message);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
