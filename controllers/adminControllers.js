//user model
const AdminModel = require("../models/AdminModel");

const ExaminationModel = require("../models/ExaminationModel");
const usersExamModel = require("../models/UsersExamModel");
const UserModel = require("../models/UserModel");

//user signup
exports.adminSignUp = (req, res, next) => {
  try {
    AdminModel.findOne({ emailId: req.body.emailId }).then((admin) => {
      if (!admin) {
        AdminModel.create(req.body).then((admin) => {
          if (user) {
            res.status(200).send({
              success: true,
              responce: admin,
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
exports.adminLogin = (req, res, next) => {
  const { emailId, password } = req.body;
  try {
    AdminModel.findOne({ emailId: emailId }).then((admin) => {
      if (admin) {
        if (admin.password === req.body.password) {
          res.status(200).send({
            success: true,
            responce: admin,
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

// add exam
exports.addExam = (req, res, next) => {
  try {
    ExaminationModel.findOne({ examName: req.body.examName }).then((exam) => {
      if (exam) {
        res.status(409).send({
          success: false,
          responce: "exam already exists",
        });
      } else {
        ExaminationModel.create(req.body).then((resp, err) => {
          if (resp) {
            res.status(200).send({
              success: true,
              responce: resp,
            });
          } else {
            res.status(500).send({
              success: false,
              responce: err,
            });
          }
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      responce: error,
    });
  }
};

// view exam
exports.viewExames = (req, res, next) => {
  try {
    ExaminationModel.find().then((exam) => {
      if (exam) {
        res.status(200).send({
          success: true,
          responce: exam,
        });
      } else {
        res.status(404).send({
          success: false,
          responce: "no exam found",
        });
      }
    });
  } catch (error) {}
};

// update exam
exports.upadateExam = (req, res, next) => {
  ExaminationModel.findOneAndUpdate(
    { examId: req.params.examId },
    req.body
  ).then((resp, err) => {
    if (resp) {
      ExaminationModel.findOne({ examId: req.params.examId }).then((examId) => {
        res.status(200).send({
          success: true,
          responce: examId,
        });
      });
    } else {
      res.status(500).send({
        success: false,
        responce: err,
      });
    }
  });
};

// delete exam
exports.deleteExam = (req, res, next) => {
  ExaminationModel.findOneAndDelete({ examId: req.params.examId }).then(
    (resp, err) => {
      if (resp) {
        res.status(200).send({
          success: true,
          responce: "examId removed",
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

// all users
exports.viewAllUsers = (req, res, next) => {
  try {
    UserModel.find().then((user) => {
      if (user) {
        res.status(200).send({
          success: true,
          responce: user,
        });
      } else {
        res.status(404).send({
          success: false,
          responce: "no user found",
        });
      }
    });
  } catch (error) {}
};

// view places
exports.examCorrespondingToUser = (req, res, next) => {
  try {
    usersExamModel.find({ userId: req.params.userId }).then((exam) => {
      if (exam) {
        res.status(200).send({
          success: true,
          responce: exam,
        });
      } else {
        res.status(404).send({
          success: false,
          responce: "no exam found",
        });
      }
    });
  } catch (error) {}
};
