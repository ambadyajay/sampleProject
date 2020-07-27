// routes for user module
const express = require("express");

// router middleware
const adminRoutes = express.Router();

//admin controllers
const {
  adminSignUp,
  adminLogin,
  addExam,
  viewExames,
  upadateExam,
  deleteExam,
  viewAllUsers,
  examCorrespondingToUser,
} = require("../controllers/adminControllers");

//signup route
adminRoutes.route("/admin/signup").post(adminSignUp);

//Login routes
adminRoutes.route("/admin/login").post(adminLogin);

//view user
adminRoutes.route("/admin/user/view").get(viewAllUsers);

//view exams
adminRoutes.route("/admin/exam/view").get(viewExames);

//update exams
adminRoutes.route("/admin/exam/update:/examId").get(upadateExam);

//delete exams
adminRoutes.route("/admin/exam/delete:/examId").get(deleteExam);

// exams by user
adminRoutes.route("/admin/usersexam/view:/userId").get(examCorrespondingToUser);

module.exports = adminRoutes;
