const { token } = require("morgan");
const Staff= require("../models/Staff");
const pool = require("../config/database");
class StaffController {
    async showStaff(req, res) {
        const queryResult = await Staff.showStaff();
        return res.status(200).json({  data:queryResult });
      }
    async updateStaff(req, res) {
   return res.status(200).json({  message: "hello" });
    try {
        const { id, name, sex,DOB, phone, address, email } = req.query;
        // if (!apitoken || apitoken == "") {
        // return res.status(400).json({ error: "apitoken is required" });
        // }
        if (!id || id == "") {
        return res.status(400).json({ error: "id is required" });
        }
        if ((!name || name == "") ) {
        return res.status(400).json({error: "name is missing"});
        }
        else if ( (!sex || sex == "") ) {
        return res.status(400).json({error: "sex is missing"});
        }
        else if ( (!DOB || DOB == "")) {
        return res.status(400).json({error: "day of birth is missing"});
        }
        else if ( (!phone || phone == "")) {
        return res.status(400).json({error: "phone number is missing"});
        }
        else if ( (!address || address == "")) {
        return res.status(400).json({error: "address is missing"});
        }
        else if ((!email || email == "")) {
        return res.status(400).json({error: "email is missing"});
        }
        else {
        const queryResult = await Staff.updateStaff(id, name, sex, DOB,phone, address, email);
        if (queryResult) {
            return res.json({
            check: true,
            });
        } else {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Server error" });
    }
    }

}

module.exports = new StaffController();