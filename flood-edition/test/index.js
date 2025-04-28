const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {cors: {
    origin: "http://localhost:8080"
  } });


io.on("connection", (socket) => {
    console.log("a user connected");
    console.log("socket id: " + socket.id);
    //console.log("socket handshake: " + socket.handshake);
    socket.emit("welcome", "Welcome to the chat!");
    
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
    
    socket.on("chat message", (msg) => {
        console.log("message: " + msg);
        io.emit("chat message", msg);
    });
    
    socket.on("typing", (username) => {
        socket.broadcast.emit("typing", username);
    });
    
    socket.on("stop typing", () => {
        socket.broadcast.emit("stop typing");
    });
    
    socket.on("user joined", (username) => {
        socket.broadcast.emit("user joined", username);
    });
    
    socket.on("user left", (username) => {
        socket.broadcast.emit("user left", username);
    });
});

httpServer.listen(3000);