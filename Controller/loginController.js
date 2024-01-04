const { db } = require("../db");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.Users.findOne({ username, password });
    if (!user) {
      res.status(401).json({
        msg: "Login failed. Wrong username or password",
        data: null,
        isSuccess: false,
      });
    }
    const token = jwt.sign({ username: username }, process.env.SECRET_KEY);
    res.status(200).json({
      msg: "Login successful !",
      data: token,
      isSuccess: true,
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      data: null,
      isSuccess: false,
    });
  }
};

module.exports = { Login };
