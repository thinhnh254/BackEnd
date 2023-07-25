// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    password: { type: String },
  },
  {
    collection: "user",
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
