"use strict";

// Socket.io client-side code

const socket = io("http://localhost:3000");

console.log("Socket.io client-side code loaded");

socket.emit("chat message", "Hello from the client!");

socket.console = function (message) {
    console.log(message);
};

