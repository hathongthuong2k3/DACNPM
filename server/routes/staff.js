const express = require("express");
const router = express.Router();

const StaffController = require("../src/controllers/StaffController");
router.get("/stat", StaffController.getStat);
router.get("/staff", StaffController.showStaff);
router.patch("/staff", StaffController.updateStaff);
//router.delete("/deletestaff",StaffController.deleteStaff);

router.get("/showtimekeeping", StaffController.showTimeKeeping);
router.get("/timekeeping", StaffController.getTimeKeeping);
//router.patch("/addtimekeeping", StaffController.addTimeKeeping);
router.patch("/timekeeping", StaffController.updateTimeKeeping); //da
router.post("/timekeeping", StaffController.insertManagestaff); // checked
// them api insert vao managestaff voi id, month, year, cac gia tri con lai mac dinh la 0

router.get("/salary/null", StaffController.getSalary);
router.get("/salary", StaffController.showSalary); // da check
router.patch("/salary", StaffController.updateSalary); // da check
router.delete("/salary", StaffController.setNullSalary); // da check

router.get("/prize/null", StaffController.getPrize);
router.get("/prize", StaffController.showPrize); // da check
router.patch("/prize", StaffController.updatePrize); // da check
router.delete("/prize", StaffController.setNullPrize); // da check
// router.get("/showprize", StaffController.showPrize);
// router.post("/updateprize", StaffController.updatePrize);
// router.post("/deleteprize", StaffController.deletePrize);
module.exports = router;
