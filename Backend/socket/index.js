module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );

    // 2. listens for new joiner
    socket.on("join-room", ({ message, room, imgUrl }) => {
      socket.join(room);
      // 3. let other knows of new joiner
      // io.in(room).emit("room-joined", message);
      socket.to(room).broadcast.emit("room-joined", message, imgUrl);
    });

    // 6. listens for message
    socket.on("chat-message", (message, room) => {
      console.log("MESSAGE AND ROOM", message, room);
      // 7. let others know of message
      // .to all clients except for the sender
      // .in to all clients + sender
      io.in(room).emit("send-message", message);
    });

    socket.on("disconnect", () => {
      console.log(`Connection ${socket.id} has left the building`);
    });
  });
};
