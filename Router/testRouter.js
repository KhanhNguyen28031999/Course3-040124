const express = require("express");
const testRouter = express.Router();
const testController = require("../Controller/testController");

testRouter.get("/", testController.getAll);
testRouter.get("/low", testController.getLowQuantity);

module.exports = testRouter;
