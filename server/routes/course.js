const express = require("express");
const router = express.Router();

const CourseController = require("../src/controllers/CourseController");
router.get("/", CourseController.getCourses);
router.get("/course", CourseController.getCourse);
router.post("/course", CourseController.addCourse);
router.patch("/course", CourseController.editCourse);
router.delete("/course", CourseController.removeCourse);
module.exports = router;
