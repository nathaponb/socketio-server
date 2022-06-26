module.exports = function (io) {
  io.on("connection", function (socket) {
    // Retrieve insensitive data from the url
    var { username, clientID, role, avatarID } = socket.handshake.query;

    // Refused the connection if bot submitting the register form
    // if (!socket.handshake.query.gToken) {
    //   socket.disconnect();
    // }

    // console.log(io.sockets.adapter);
    // console.log(socket.id)
    // TODO: have a function that update user in users both joining and leaving
    io.sockets.adapter.users = {
      ...io.sockets.adapter.users,
      [socket.id]: { clientID, username, role, avatarID },
    };
    // console.log(io.sockets.adapter.users);
    /**
     * Broadcast connection to everyone except the new connector
     */
    socket.broadcast.emit("connection", {
      type: "notify",
      text: `${username} has joined the chat`,
      timeStamp: new Date(),
      isOwner: false,
      owner: username,
      ownerData: { clientID, username, role, avatarID },
    });
    /**
     * * Emit to the new Connector particularly
     */
    socket.emit("users", {
      timeStamp: new Date(),
      sid: socket.id,
      people: io.sockets.adapter.users,
    });

    // #Disconnect
    socket.on("disconnect", () => {
      // TODO: update users object
      delete io.sockets.adapter.users[socket.id];
      console.log(io.sockets.adapter.users);

      // After a user left the chat client should know who is left
      // since client has corresponding client stored
      // TODO: grab socket.id and send back its clientID
      socket.broadcast.emit("disconnection", {
        type: "notify",
        text: `${username} is left`,
        timeStamp: new Date(),
        isOwner: false,
        owner: username,
        ownerData: { clientID, username, role },
      });
    });

    // #Global Room
    require("./global")(socket);
  });
};
