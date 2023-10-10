const mongoose = require("mongoose");
const Order = require("./order.Schema");

const addOrder = async function (req, res) {
  const data = req.body;
  data.totalAmount = data.price*data.quantity

  let orders = await Order.create(data);
  res.status(200).json({ message: "Order Added Successfully", data: orders });
};

const getOrder = async function (req, res) {
  const allOrders = await Order.find();
  res.status(200).json({ message: "Order History", data:allOrders });
};
module.exports = { addOrder, getOrder };
