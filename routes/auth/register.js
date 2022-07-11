const express = require("express");
const router = express.Router();
const validateToken = require("../../utils/validateToken");

router.post("/", validateToken, (req, res, next) => {
  const { clientID, username, role, identicon } = req.body;
  console.log(req.body);
  res.status(200).json({
    clientID,
    username,
    role,
    identicon,
    tokenVerified: req.verified,
  });
});

module.exports = router;
