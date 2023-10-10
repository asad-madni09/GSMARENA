// 1. User schema -> name, email, password, isActive, userType {user, admin}

let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, lowercase: true, unique: true },
  email: { type: String, required: true, unqiue: true, lowercase: true },
  password: { type: String, required: true },
  userType: { enum: ["user", "admin"], default: ["user"] },
  isActive: { type: Boolean, default: true },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
