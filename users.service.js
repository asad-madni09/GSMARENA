const mongoose = require("mongoose");

const User = require("./users.schema");
const Order = require("./order.Schema");

const getUsers = async function (req, res) {
  const allUsers = await User.find();
  res.status(200).json({ message: "Showing All Users", data: allUsers });
};

const addUserDetails = async function (req, res) {
  const data = req.body;
  const addUser = await User.create(data);
  res.status(200).json({ message: "User Added Successfully", data: addUser });
};

const getDetailsById = async function (req, res) {
  const userId = req.params.userId;
  const orderId = req.params.orderId;
  console.log("userID = ", userId, "orderId = ", orderId);
  const getProduct = await Order.find({ userId: userId, _id: orderId });
  res.status(200).json({ message: "Order Detail", data: getProduct });
};

module.exports = { getUsers, addUserDetails, getDetailsById };
