module.exports = (socket) => {
  // console.log(data);
  socket.on("global", (data) => {
    // send sender specifically
    socket.emit("global", {
      type: "message",
      text: data.message,
      isOwner: true,
      senderID: data.senderID,
      senderData: data.sender,
      timeStamp: new Date(),
    });

    // send to everyone except sender
    socket.broadcast.emit("global", {
      type: "message",
      text: data.message,
      isOwner: false,
      senderID: data.senderID,
      senderData: data.sender,
      timeStamp: new Date(),
    });
  });
};
