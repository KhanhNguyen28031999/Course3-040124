const express = require("express");

const loginController = require("../Controller/loginController");

const loginRouter = express.Router();

loginRouter.post("/", loginController.Login);

module.exports = loginRouter;
