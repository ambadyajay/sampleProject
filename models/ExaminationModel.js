//model used for admin

const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  examName: {
    type: String,
  },
  discription: {
    type: String,
  },
});

const examModel = mongoose.model("exams", examSchema);

module.exports = examModel;
