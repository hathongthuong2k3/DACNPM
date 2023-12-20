const pool = require("../config/database");

class Staff {
    async showStaff() {
        const query =
          "SELECT name,sex,dateofbirth,phone, address, email FROM staff,users WHERE staff.id = users.id";
        const [rows] = await pool.query(query);
        return rows;
      }
    async updateStaff(id, name, sex,dateofbirth,phone, address,email) {
        const query1 = "UPDATE users SET email= ?  WHERE id = ?" ;
        const query = "UPDATE staff SET name=?, sex=?, dateofbirth=?, phone=?,address=? WHERE id = ?";
        //const [row1s] = await pool.query(query1, [email, id]);
        const [rows] = await pool.query(query, [name,sex,dateofbirth,phone,address,id]);
        const [rows1] =await pool.query(query1,[email,id]);
        if (rows1.changedRows==0 && rows.changedRows==0) return false;
        return true;
       
    }
    
    async deleteStaff(id) {
      const query1 = "DELETE FROM users WHERE id = ?" ;
      const query = "DELETE FROM staff WHERE id = ?";
      const query2 = "DELETE FROM manageStaff WHERE id = ?";
      //const [row1s] = await pool.query(query1, [email, id]);
      const [rows2] = await pool.query(query2, [id]);
      const [rows] = await pool.query(query, [id]);
      const [rows1] =await pool.query(query1,[id]);
      if (rows1.changedRows==0 && rows.changedRows==0) return false;
      return true;
     
  }
    async showTimeKeeping() {
      const query =
        "SELECT name,month,year,attendDate FROM staff,manageStaff WHERE staff.id = manageStaff.idStaff";
      const [rows] = await pool.query(query);
      return rows;
    }
 
    async addTimeKeeping(id) {
      const query = "UPDATE manageStaff SET attendDate=attendDate+1 WHERE id = ?";
      //const [row1s] = await pool.query(query1, [email, id]);
      const [rows] = await pool.query(query, [id]);
      if ( rows.changedRows==0) return false;
      return true;
    }

    async updateTimeKeeping(id,month,year,attendDate) {
      const query = "UPDATE manageStaff SET month=?,year=?,attendDate= ? WHERE idStaff = ?";
      //const [row1s] = await pool.query(query1, [email, id]);
      const [rows] = await pool.query(query, [month,year,attendDate,id]);
      if ( rows.changedRows==0) return false;
      return true;
    }
    async insertManagestaff(id,month,year){
      const query = "INSERT INTO manageStaff values (?,?,?,0,NULL,NULL,NULL,NULL,NULL)";
      const [rows] = await pool.query(query, [id,month,year]);
      console.log(rows);
      if ( rows.affectedRows==0) return false;
      return true;
    }

    async showSalary(){
      const query =
        "SELECT name,month,year,paid,paidStatus FROM staff,manageStaff WHERE staff.id = manageStaff.idStaff AND paid is not null AND paidStatus is not null";
      const [rows] = await pool.query(query);
      return rows;
    }

    async updateSalary(id,month,year,paid,paidStatus) {
      const query = "UPDATE manageStaff SET paid=?,paidStatus=? WHERE idStaff = ? and month=? and year=?";
      //const [row1s] = await pool.query(query1, [email, id]);
      const [rows] = await pool.query(query, [paid,paidStatus,id,month,year],);
      if ( rows.changedRows==0) return false;
      return true;
    }

    async setNullSalary(id,month,year) {
      const query = "UPDATE manageStaff SET paid=NULL,paidStatus=NULL WHERE idStaff = ? and month=? and year=?";
      //const [row1s] = await pool.query(query1, [email, id]);
      const [rows] = await pool.query(query, [id,month,year],);
      if ( rows.changedRows==0) return false;
      return true;
    }

    async showPrize(){
      const query =
        "SELECT name,month,year,prize,prizeStatus FROM staff,manageStaff WHERE staff.id = manageStaff.idStaff AND prize is not null AND prizeStatus is not null";
      const [rows] = await pool.query(query);
      return rows;
    }

    async updatePrize(id,month,year,prize,prizeStatus) {
      const query = "UPDATE manageStaff SET prize=?,prizeStatus=? WHERE idStaff = ? and month=? and year=?";
      //const [row1s] = await pool.query(query1, [email, id]);
      const [rows] = await pool.query(query, [prize,prizeStatus,id,month,year],);
      if ( rows.changedRows==0) return false;
      return true;
    }

    async setNullPrize(id,month,year) {
      const query = "UPDATE manageStaff SET prize=NULL,prizeStatus=NULL WHERE idStaff = ? and month=? and year=?";
      //const [row1s] = await pool.query(query1, [email, id]);
      const [rows] = await pool.query(query, [id,month,year],);
      if ( rows.changedRows==0) return false;
      return true;
    }

    async getStart() {
      var res = [];
      var query = `SELECT COUNT(*) AS countTeacher FROM teachers`;
      [result] = await pool.query(query);
      res.push(result[0]);
      query = `SELECT COUNT(*) AS countStudent FROM students`;
      [result] = await pool.query(query);
      res.push(result[0]);
      query = `SELECT COUNT(*) AS countStaff FROM staff`;
      [result] = await pool.query(query);
      res.push(result[0]);
      return res;
    }


} 
module.exports = new Staff();
