module.exports = function (io) {
  io.on("connection", function (socket) {
    var { username, clientID, role, identiconHash, identiconRgba } =
      socket.handshake.query; // technically, query strings

    io.sockets.adapter.users = {
      ...io.sockets.adapter.users,
      [socket.id]: {
        clientID,
        username,
        role,
        identicon: {
          hash: identiconHash,
          rgba: identiconRgba.split(",").map((v) => +v), // convert string to array of number[i]
        },
      },
    };
    /**
     * Broadcast connection to everyone except the sender
     */
    // IMessage Type
    socket.broadcast.emit("connection", {
      type: "notify",
      text: `${username} has joined the chat`,
      isOwner: false,
      senderID: clientID,
      senderData: {
        clientID,
        username,
        role,
        identicon: {
          hash: identiconHash,
          rgba: identiconRgba.split(",").map((v) => +v),
        },
      },
      timeStamp: new Date(),
    });
    /**
     * * Emit to the new Connector particularly
     */
    socket.emit("users", {
      sid: socket.id,
      people: io.sockets.adapter.users,
      timeStamp: new Date(),
    });

    // #Disconnect
    socket.on("disconnect", () => {
      delete io.sockets.adapter.users[socket.id]; // delete 'disconnect' user

      socket.broadcast.emit("disconnection", {
        type: "notify",
        text: `${username} is left`,
        isOwner: false,
        senderID: clientID,
        timeStamp: new Date(),
      });
    });

    // #Global Room
    require("./global")(socket);
  });
};
