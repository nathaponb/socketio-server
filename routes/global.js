module.exports = (socket) => {
  // console.log(data);
  socket.on("global", (data) => {
    console.log(data);
    // send to everyone include sender in global room
    socket.emit("global", 
      {
        type: "message",
        text: data.message,
        isOwner: true,
        owner: data.owner,
        time: new Date()
      }
    );

    // send to everyone except sender
    socket.broadcast.emit("global",
      {
        type: "message",
        text: data.message,
        isOwner: false,
        owner: data.owner,
        time: new Date()
      }
    )
  });
};