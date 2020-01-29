const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    unique: true
  },
  password: { type: String, required: true, minlength: 8, maxlength: 1024 }
});

userSchema.methods.generateAuthToken = function() {
  const privateKey = config.get("jwtPrivateKey");
  return jwt.sign({ _id: this._id }, privateKey);
};

module.exports = mongoose.model("User", userSchema);
