// Create model "models"
// - name
// - brandId - ref
// - images - Array of string
// - processor -
// - ram - Number (in GB)
// - Storage - Number (in GB)
// - screenSize - Number
// - isActive

const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true }, // comma added here
  brandId: { type: mongoose.Schema.Types.ObjectId, required: true ,ref:"brands"},
  images: [String],
  processor: String,
  ram: Number,
  storage: Number,
  screenSize: Number,
  isActive: { type: Boolean, default: true },
});

const mobileModel = mongoose.model("phoneModels", phoneSchema);
module.exports = mobileModel;
