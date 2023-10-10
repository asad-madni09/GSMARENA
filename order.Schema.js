// 2. Order schema -> userId, phoneModelId, price, quantity, totalAmount
const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  phoneModelId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: { type: Number, quantity: true },
  totalAmount: { type: Number },
});

let orderModel = mongoose.model("orderHistory", orderSchema);
module.exports = orderModel;
