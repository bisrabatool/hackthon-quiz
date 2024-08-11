const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
      enum: ["User", "Admin"], 
    },
    secretKey: {
      type: String,
      default: null,
    },
    
  },
  {
    collection: "UserInfo",
    timestamps: true,
  }
);

const User = mongoose.model("UserInfo", UserSchema);

module.exports = User;
