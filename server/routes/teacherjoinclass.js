const express = require("express");
const router = express.Router();

const TeacherJoinClassController = require("../src/controllers/TeacherJoinClassController");
router.get("/", TeacherJoinClassController.getTeacherJoinClasses);
router.post("/class", TeacherJoinClassController.addTeacherJoinClass);
router.patch("/date", TeacherJoinClassController.updateDate);
router.patch("/prize", TeacherJoinClassController.updatePrize);
router.patch("/salary", TeacherJoinClassController.updateSalary);
router.patch("/rating", TeacherJoinClassController.updateRating);
router.delete("/salary", TeacherJoinClassController.deleteSalary);
router.delete("/prize", TeacherJoinClassController.deletePrize);
router.delete("/class", TeacherJoinClassController.deleteTeacherJoinClass);
//router.get("/get/:id", TeacherJoinClassController.getTeacherJoinClass);
module.exports = router;
