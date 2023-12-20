const { token } = require("morgan");
const Staff= require("../models/Staff");
const Log = require("../models/Log");
const pool = require("../config/database");
class StaffController {
    async getStart(req, res) {
        const queryResult = await Staff.getStart();
        if (queryResult){
            const result = await Log.addLog(res.user.id,"tính tổng nhân viên, giáo viên, học sinh", Date.now(), true);
            return res.status(200).json({check:true,  data:queryResult });
        }
        else {
            const result = await Log.addLog(res.user.id,"xem nhân viên", Date.now(), false);
            return res.status(400).json({check:false,  error:"không có giáo viên, học sinh, nhân viên" });
        }
      }
    async showStaff(req, res) {
        const queryResult = await Staff.showStaff();
        if (queryResult){
            const result = await Log.addLog(res.user.id,"xem nhân viên", Date.now(), true);
            return res.status(200).json({check:true,  data:queryResult });
        }
        else {
            const result = await Log.addLog(res.user.id,"xem nhân viên", Date.now(), false);
            return res.status(400).json({check:false,  error:"Không có nhân viên" });
        }
      }
    async updateStaff(req, res) {
  // return res.status(200).json({  message: "hello" });
        try {
            const { id, name, sex,dayofbirth, phone, address, email } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
            
            return res.status(400).json({ check: false, error: "id is required" });
            }
            if ((!name || name == "") ) {
            const result = await Log.addLog(res.user.id,"sửa thông tin nhân viên", Date.now(), false);
            return res.status(400).json({check: false, error: "name is missing"});
            }
            else if ( (!sex || sex == "") ) {
         res.status(400).json({check: false, error: "sex is missing"});
            }
            else if ( (!dayofbirth || dayofbirth == "")) {
         res.status(400).json({check: false, error: "day of birth is missing"});
            }
            else if ( (!phone || phone == "")) {
         res.status(400).json({check: false, error: "phone number is missing"});
            }
            else if ( (!address || address == "")) {
        
            return res.status(400).json({check: false, error: "address is missing"});
            }
            else if ((!email || email == "")) {
         res.status(400).json({check: false, error: "email is missing"});
            }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.updateStaff(id, name, sex, dayofbirth,phone, address, email);
                console.log(queryResult);
                if (queryResult) {
                    const result = await Log.addLog(res.user.id,"sửa thông tin nhân viên", Date.now(), true);
                    return res.status(200).json({check: true, msg:"updated"});
                } else {
                    const result = await Log.addLog(res.user.id,"sửa thông tin nhân viên", Date.now(), false);
                    return res.status(400).json({ check: false, error: "du lieu van giu nguyen!" });
                }
            }
        } catch (error) {
            const result = await Log.addLog(res.user.id,"sửa thông tin nhân viên", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({ check: false, error: "Server error" });
        }
    }
    async deleteStaff(req,res){
        try {
            const { id } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
            return res.status(400).json({ error: "id is required" });
            }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.deleteStaff(id);
                if (queryResult) {
                    const result = await Log.addLog(res.user.id,"xóa nhân viên", Date.now(), true);
                    return res.status(200).json({check: true, msg:"updated"});
                    
                    
                } else {
                    const result = await Log.addLog(res.user.id,"xóa nhân viên", Date.now(), false);
                    return res.status(400).json({ check: false, error: "nhan vien khong ton tai" });
                }
            }
        } catch (error) {
            const result = await Log.addLog(res.user.id,"xóa nhân viên", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({check: false, error: "Server error" });
        }
    }
    async showTimeKeeping(req, res) {
        const queryResult = await Staff.showTimeKeeping();
        if(queryResult){
            const result = await Log.addLog(res.user.id,"xem bảng chấm công", Date.now(), true);
            return res.status(200).json({ check: true, data:queryResult });
        }
        else {
            const result = await Log.addLog(res.user.id,"xem bảng chấm công", Date.now(), false);
            return res.status(400).json({ check: false, error:"không có bảng chấm công"});
        }
    }
        

    async addTimeKeeping(req, res) {
        try {
            const { id } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
            return res.status(400).json({check:false, error: "id is required" });
            }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.addTimeKeeping(id);
                console.log(queryResult);
                if (queryResult) {
                    const result = await Log.addLog(res.user.id,"chấm công cho nhân viên", Date.now(), true);
                    return res.status(200).json({check: true, msg:"updated"});
                    
                    
                } else {
                    const result = await Log.addLog(res.user.id,"chấm công cho nhân viên", Date.now(), false);
                    return res.status(400).json({check: false, error: "du lieu van giu nguyen!" });
                }
            }
        } catch (error) {
            const result = await Log.addLog(res.user.id,"chấm công cho nhân viên", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({check: false, error: "Server error" });
        }
    }
    async updateTimeKeeping(req, res) {
        try {
            const { id,month,year,attendDate } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
                return res.status(400).json({check: false, error: "id is required" });
            }
            else if (!month || month == "") { res.status(400).json({check: false, error: "month is required" });
            }
            else if (!year || year == "") { res.status(400).json({check: false, error: "year is required" });
            }
            else if (!attendDate|| attendDate == "") { res.status(400).json({check: false, error: "attendDate is required" });
                }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.updateTimeKeeping(id,month,year,attendDate);
                if (queryResult) {
                     const result = await Log.addLog(res.user.id,"sửa bảng chấm công", Date.now(), true);
                    return res.status(200).json({check: true, msg:"updated"});
                    
                    
                } else {
                    const result = await Log.addLog(res.user.id,"sửa bảng chấm công", Date.now(), false);
                    return res.status(400).json({ error: "du lieu van giu nguyen!" });
                }
            }
        } catch (error) {
            const result = await Log.addLog(res.user.id,"sửa bảng chấm công", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({check: false, error: "Server error" });
        }
    }
    async insertManagestaff(req, res) { // them mot record moi voi id,month,year, cac gia tri khac la 0
        try {
            const { id,month,year } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
            return res.status(400).json({check:false, error: "id is required" });
            }
            else if (!month || month == "") { 
                return res.status(400).json({check:false, error: "month is required" });
                }
            else if (!year || year == "") { 
                return res.status(400).json({check:false, error: "year is required" });
                }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.insertManagestaff(id,month,year);
                console.log(queryResult);
                if (queryResult) {
                    const result = await Log.addLog(res.user.id,"thêm bảng chấm công cho nhân viên", Date.now(), true);
                    return res.status(200).json({check: true, msg:"updated"});
                    
                    
                } else {
                    const result = await Log.addLog(res.user.id,"thêm bảng chấm công cho nhân viên", Date.now(), false);
                    return res.status(400).json({check: false, error: "du lieu van giu nguyen!" });
                }
            }
        } catch (error) {
            const result = await Log.addLog(res.user.id,"thêm bảng chấm công cho nhân viên", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({check: false, error: "Server error" });
        }
    }
    async showSalary(req,res){
        const queryResult = await Staff.showSalary();
        if (queryResult){
            const result = await Log.addLog(res.user.id,"xem lương của nhân viên", Date.now(), false);
            return res.status(200).json({check: true,  data:queryResult });
        }
        else {
            const result = await Log.addLog(res.user.id,"xem lương của nhân viên", Date.now(), true);
            return res.status(400).json({check: false,  error:"Không có bảng lương cho nhân viên" });

        }
    }
    async updateSalary(req, res) {
        try {
            const { id,month,year,paid,paidStatus } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
            return res.status(400).json({check: false, error: "id is required" });
            }
            else if (!month || month == "") {
                return res.status(400).json({check: false, error: "month is required" });
                }
            else if (!year || year == "") {
                return res.status(400).json({check: false, error: "year is required" });
            }
            else if (!paid || paid == "") {
                return res.status(400).json({check: false, error: "paid is required" });
            }
            else if (!paidStatus || paidStatus == "") {
                return res.status(400).json({check: false, error: "paidStatus is required" });
            }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.updateSalary(id,month,year,paid,paidStatus);
                console.log(queryResult);
                if (queryResult) {
                    const result = await Log.addLog(res.user.id,"sửa lương của nhân viên", Date.now(), true);
                    return res.status(200).json({check: true, msg:"updated"});
                    
                    
                } else {
                    const result = await Log.addLog(res.user.id,"sửa lương của nhân viên", Date.now(), false);
                    return res.status(400).json({check: false, error: "du lieu van giu nguyen!" });
                }
            }
        } catch (error) {
            const result = await Log.addLog(res.user.id,"sửa lương của nhân viên", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({check: false, error: "Server error" });
        }
    }
    async setNullSalary(req,res){
        try {
            const { id,month,year } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
                return res.status(400).json({check: false, error: "id is required" });
            }
            else if (!month || month == "") {
                return res.status(400).json({check: false, error: "month is required" });
            }
            else if (!year || year == "") {
                return res.status(400).json({check: false, error: "year is required" });
            }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.setNullSalary(id,month,year);
                if (queryResult) {
                    const result = await Log.addLog(res.user.id,"xóa lương của nhân viên", Date.now(), true);
                    return res.status(200).json({check: true, msg:"updated"});
                    
                    
                } else {
                    const result = await Log.addLog(res.user.id,"xóa lương của nhân viên", Date.now(), false);
                    return res.status(400).json({check: false, error: "nhan vien khong ton tai" });
                }
            }
        } catch (error) {
            const result = await Log.addLog(res.user.id,"xóa lương của nhân viên", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({check: false, error: "Server error" });
        }
    }

    async showPrize(req,res){
        const queryResult = await Staff.showPrize();
        if (queryResult){
            const result = await Log.addLog(res.user.id,"xem lương của nhân viên", Date.now(), true);
            return res.status(200).json({check: true,  data:queryResult });
        }
        else {
            const result = await Log.addLog(res.user.id,"xem lương của nhân viên", Date.now(), false);
            return res.status(400).json({check: false,  error:"không có bảng lương nhân viên" });

        }
    
    }
    async updatePrize(req, res) {
        try {
            const { id,month,year,paid,paidStatus } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
            return res.status(400).json({check:false, error: "id is required" });
            }
            else if (!month || month == "") {
                return res.status(400).json({check:false, error: "month is required" });
                }
            else if (!year || year == "") {
                return res.status(400).json({check:false, error: "year is required" });
            }
            else if (!paid || paid == "") {
                return res.status(400).json({check:false, error: "paid is required" });
            }
            else if (!paidStatus || paidStatus == "") {
                return res.status(400).json({check:false, error: "paidStatus is required" });
            }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.updatePrize(id,month,year,paid,paidStatus);
                console.log(queryResult);
                if (queryResult) {
                     const result = await Log.addLog(res.user.id,"sửa lương của nhân viên", Date.now(), true);
                    return res.status(200).json({check: true, msg:"updated"});
                } else {
                     const result = await Log.addLog(res.user.id,"sửa lương của nhân viên", Date.now(), false);
                    return res.status(400).json({check: false, error: "du lieu van giu nguyen!" });
                }
            }
        } catch (error) {
            const result = await Log.addLog(res.user.id,"xem lương của nhân viên", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({check: false, error: "Server error" });
        }
    }
    async setNullPrize(req,res){
        try {
            const { id,month,year } = req.body;
            // if (!apitoken || apitoken == "") {
            // return res.status(400).json({ error: "apitoken is required" });
            // }
            if (!id || id == "") {
                return res.status(400).json({check: false, error: "id is required" });
            }
            else if (!month || month == "") {
                return res.status(400).json({check: false, error: "month is required" });
            }
            else if (!year || year == "") {
                return res.status(400).json({check: false, error: "year is required" });
            }
            else {
                //return res.status(400).json({error: "vo day duoc"});
                const queryResult = await Staff.setNullPrize(id,month,year);
                if (queryResult) {
                     const result = await Log.addLog(res.user.id,"xóa lương của nhân viên", Date.now(), false);
                    return res.status(200).json({check: true, msg:"updated"});
                    
                    
                } else {
                     const result = await Log.addLog(res.user.id,"xóa lương của nhân viên", Date.now(), false);
                    return res.status(400).json({check: false, error: "nhan vien khong ton tai" });
                }
            }
        } catch (error) {
             const result = await Log.addLog(res.user.id,"xóa lương của nhân viên", Date.now(), false);
            console.error("Error:", error);
            return res.status(500).json({check: false, error: "Server error" });
        }
    }
}

module.exports = new StaffController();