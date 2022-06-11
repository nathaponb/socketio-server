module.exports = function (io) {
  io.on("connection", function (socket) {
    // Retrieve insensitive data from the url
    var { username, ID, role } = socket.handshake.query;
    // console.log(io.sockets.adapter);
    // console.log(socket.id)
    // TODO: have a function that update user in users both joining and leaving
    io.sockets.adapter.users = {...io.sockets.adapter.users, [socket.id] : { clientID: ID, username, role }}
    console.log(io.sockets.adapter.users)
    /**
     * Broadcast connection to everyone except the new connector
     */
    socket.broadcast.emit("connection", {
      type: "notify",
      text: `${username} has joined the chat`,
      timeStamp: new Date(),
      isOwner: false,
      owner: username,
      ownerData: {ID, username, role},
    });
    /**
     * * Emit to the new Connector particularly
     */
    socket.emit("connection", {
      type: "info",
      text: null,
      timeStamp: new Date(),
      isOwner: false,
      owner: username,
      people: io.sockets.adapter.users
    })
    
    // #Disconnect
    socket.on("disconnect", () => {
      // TODO: update users object
      delete io.sockets.adapter.users[socket.id]
      console.log(io.sockets.adapter.users)
      socket.broadcast.emit("disconnection", {
        type: "notify",
        text: `${username} is left`,
        timeStamp: new Date(),
        isOwner: false,
        owner: username,
        ownerData: {ID, username, role},
      })
    })

    // #Global Room
    require("./global")(socket);
  });
};
