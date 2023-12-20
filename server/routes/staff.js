const express = require("express");
const router = express.Router();

const StaffController = require("../src/controllers/StaffController");
router.get("/showstaff", StaffController.showStaff);
router.post("/updatestaff", StaffController.updateStaff);
// router.post ("addstaff", StaffController.addStaff);

// router.get("/showtimekeeping", StaffController.showTimeKeeping);
// router.post("/addtimekeeping", StaffController.addTimeKeeping);
// router.post("/updatetimekeeping", StaffController.updateTimeKeeping);

// router.get("/showsalary", StaffController.showSalary);
// router.post("/updatesalary", StaffController.updateSalary);
// router.post("/deletesalary", StaffController.deleteSalary);

// router.get("/showprize", StaffController.showPrize);
// router.post("/updateprize", StaffController.updatePrize);
// router.post("/deleteprize", StaffController.deletePrize);
module.exports = router;
