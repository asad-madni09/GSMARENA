// Create model "brands"
// - name
// - slug - unique, auto create it in lowercase(name). Replace space with hyphen
// - logo
// - isActive

const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: {type: String, required: true, lowercase: true, unique: true},
  //   slug: { type: String, unique: true },
  logo: String,
  isActive: { type: Boolean, default: true },
});
const brandDetails = mongoose.model("brands", brandSchema);
module.exports = brandDetails;
