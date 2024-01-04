const { db } = require("../db");
const { ObjectId } = require("mongodb");

const getAll = async (req, res) => {
  const getAllProduct = await db.Inventory.find().toArray();
  res.status(200).json({
    message: "Get successful !",
    data: getAllProduct,
    isSuccess: true,
  });
};

const getLowQuantity = async (req, res) => {
  const getProduct = await db.Inventory.find({
    instock: { $lt: 100 },
  }).toArray();
  res.status(200).json({
    message: "Get successful !",
    data: getProduct,
    isSuccess: true,
  });
};

module.exports = { getAll, getLowQuantity };
