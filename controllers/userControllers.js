//user model
const UserModel = require("../models/UserModel");

// exam model
const ExamModel = require("../models/ExaminationModel");

// usersexam model
const UsersExamModel = require("../models/UsersExamModel");

//user signup
exports.userSignUp = (req, res, next) => {
  try {
    UserModel.findOne({ emailId: req.body.emailId }).then((user) => {
      if (!user) {
        UserModel.create(req.body).then((user) => {
          if (user) {
            res.status(200).send({
              success: true,
              responce: user,
            });
          } else {
            res.status(500).send({
              success: true,
              responce: "server error",
            });
          }
        });
      } else {
        res.status(409).send({
          success: true,
          responce: "email already exits",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      responce: error,
    });
  }
};

//user Login
exports.userLogin = (req, res, next) => {
  const { emailId, password } = req.body;
  try {
    UserModel.findOne({ emailId: emailId }).then((user) => {
      if (user) {
        if (user.password === req.body.password) {
          res.status(200).send({
            success: true,
            responce: user,
          });
        } else {
          res.status(401).send({
            success: true,
            responce: "not autherized to login",
          });
        }
      } else {
        res.status(404).send({
          success: true,
          responce: "No user found",
        });
      }
    });
  } catch (error) {}
};

// attend exam
exports.userAttendExam = (req, res, next) => {
  const query = {
    $and: [{ userId: req.params.userId }, { examName: req.body.ExamName }],
  };
  try {
    UsersExamModel.findOne(query).then((exam) => {
      if (!exam) {
        UsersExamModel.create(req.body).then((exam) => {
          if (exam) {
            res.status(200).send({
              success: true,
              responce: exam,
            });
          } else {
            res.status(500).send({
              success: true,
              responce: "server error",
            });
          }
        });
      } else {
        res.status(409).send({
          success: true,
          responce: "exam already exits",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      responce: error,
    });
  }
};

// delete place
exports.deleteExamAttend = (req, res, next) => {
  UsersExamModel.findOneAndDelete({ attendId: req.params.attendId }).then(
    (resp, err) => {
      if (resp) {
        res.status(200).send({
          success: true,
          responce: "Exam removed",
        });
      } else {
        res.status(500).send({
          success: false,
          responce: err,
        });
      }
    }
  );
};
