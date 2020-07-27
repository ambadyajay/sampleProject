//model used for admin

const mongoose = require("mongoose");

const adminShema = new mongoose.Schema({
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
    default: "admin",
  },
});

const adminModel = mongoose.model("admin", adminShema);

module.exports = adminModel;
