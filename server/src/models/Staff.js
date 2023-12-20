const pool = require("../config/database");

class Staff {
    async showStaff() {
        const query =
          "SELECT name,sex,dateofbirth,phone, address FROM staff";
        const [rows] = await pool.query(query);
        return rows;
      }
    async updateStaff(id, name, sex, DOB,phone, address) {
        
        const query = "UPDATE task SET name=?, sex=?, DOB=?, phone = ?, address= ?  WHERE id = ?";
        const [rows] = await pool.query(query, [name, sex, DOB,phone, address, id]);
        return rows;
        
    }
}
module.exports = new Staff();