// routes for user module
const express = require("express");

// router middleware
const userRoutes = express.Router();

//admin controllers
const {
  userSignUp,
  userLogin,
  userAttendExam,
  deleteExamAttend,
} = require("../controllers/userControllers");

//signup route
userRoutes.route("/user/signup").post(userSignUp);

//Login routes
userRoutes.route("/user/login").post(userLogin);

//post exam routes
userRoutes.route("/user/exam").post(userAttendExam);

//Login routes
userRoutes.route("/user/exam/:attendId").delete(deleteExamAttend);

module.exports = userRoutes;
