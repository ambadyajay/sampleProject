//model used for admin

const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: [true, "enter user name"],
  },
  password: {
    type: String,
    required: [true, "enter password"],
  },
  role: {
    type: String,
    default: "user",
  },
});

const userModel = mongoose.model("users", userShema);

module.exports = userModel;
