module.exports = (io) => {
  const room = 1;
  io.on("connection", (socket) => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );

    socket.on("disconnect", () => {
      console.log(`Connection ${socket.id} has left the building`);
    });
    socket.on("send message", function (message) {
      console.log(message);
      io.emit("recieve message", message);
    });

    socket.on("chat message", function (msg) {
      console.log("THIS IS FROM THE SERVER ", msg);
      io.emit("chat message", msg);
    });

    socket.on("room", function (room) {
      console.log("this is the room ", room);
      socket.join(room);
    });
    io.sockets.in(room).emit("event", "we are here");
  });
};
