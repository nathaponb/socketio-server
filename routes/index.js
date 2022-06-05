var express = require("express");
var router = express.Router();

module.exports = function (io) {
  io.on("connection", function (socket) {
    console.log("a user connected");
  });

  return router;
};
