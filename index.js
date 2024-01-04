const express = require("express");
const bodyParser = require("body-parser");
const { connectToDB } = require("./db");
const testRouter = require("./Router/testRouter");
const loginRouter = require("./Router/loginRouter");
const authenticateUser = require("./Middlewares/authenticateUser");
const cors = require("cors");

const port = 3001;
const app = express();

require("dotenv").config();

app.use(cors);
app.use(bodyParser.json());

app.use("/inventory", authenticateUser, testRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToDB();
});
