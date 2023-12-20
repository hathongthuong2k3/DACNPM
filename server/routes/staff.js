const express = require("express");
const router = express.Router();

const StaffController = require("../src/controllers/StaffController");
router.get("/getstart",StaffController.getStart);
router.get("/showstaff", StaffController.showStaff);
router.patch("/updatestaff", StaffController.updateStaff);
//router.delete("/deletestaff",StaffController.deleteStaff);


router.get("/showtimekeeping", StaffController.showTimeKeeping);
//router.patch("/addtimekeeping", StaffController.addTimeKeeping);
router.patch("/updatetimekeeping", StaffController.updateTimeKeeping);   //da
router.post("/insertmanagestaff", StaffController.insertManagestaff)    // checked
// them api insert vao managestaff voi id, month, year, cac gia tri con lai mac dinh la 0

router.get("/showsalary", StaffController.showSalary); // da check
router.patch("/updatesalary", StaffController.updateSalary);  // da check
router.patch("/setnullsalary", StaffController.setNullSalary); // da check

router.get("/showprize", StaffController.showPrize);   // da check
router.patch("/updateprize", StaffController.updatePrize); // da check
router.post("/setnullprize", StaffController.setNullPrize); // da check
// router.get("/showprize", StaffController.showPrize);
// router.post("/updateprize", StaffController.updatePrize);
// router.post("/deleteprize", StaffController.deletePrize);
module.exports = router;
