//model used for admin

const mongoose = require("mongoose");

const usersExamSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  examName: {
    type: String,
  },
});

const usersExamModel = mongoose.model("usersexam", usersExamSchema);

module.exports = usersExamModel;
