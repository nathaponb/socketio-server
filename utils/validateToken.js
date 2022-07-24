const axios = require("axios");
require("dotenv").config();

module.exports = async (req, res, next) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const { token } = req.body;
  if (!token) {
    return next("Bad request, Nice try Robot!");
  }
  try {
    const response = await axios.get(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );
    req.verified = response.data.success;
    next();
  } catch (err) {
    next(err);
  }
};
