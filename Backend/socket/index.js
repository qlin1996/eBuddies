module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );

    // 2. listens for new joiner
    socket.on("join-room", (messageObj) => {
      socket.join(messageObj.eventId);
      // 3. let other knows of new joiner
      socket.to(messageObj.eventId).broadcast.emit("room-joined", messageObj);
      console.log("MSG OBJ", messageObj);
    });

    // 6. listens for message
    socket.on("chat-message", (messageObj) => {
      console.log("MESSAGE AND ROOM", messageObj);
      // 7. let others know of message
      io.in(messageObj.eventId).emit("send-message", messageObj);
    });

    socket.on("leave-room", function (eventId) {
      console.log("user left the room:", eventId);
      socket.leave(eventId);
    });

    socket.on("disconnect", () => {
      console.log(`Connection ${socket.id} has left the building`);
    });
  });
};
