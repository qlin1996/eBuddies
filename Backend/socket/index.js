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

    socket.on("create", function (room) {
      socket.join(room);
    });
    io.sockets.in(room).emit("event", "we are here");
  });
};
