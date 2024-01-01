const pool = require("../config/database");
class Email {
  async getEmails() {
    const query = `SELECT * FROM emails`;
    const [result] = await pool.query(query);
    return result;
  }
  async addEmail(email, role) {
    const query1 = `INSERT INTO emails(email,role) VALUE (?,?)`;
    const [result1] = await pool.query(query1, [email, role]);
    if (result1.affectedRows == 0) return false;
    return true;
  }
  async updateEmail(id, email, role) {
    const query = `UPDATE emails SET email=?,role=? WHERE id = ?`;
    const [result] = await pool.query(query, [email, role, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async deleteEmail(id) {
    if (Number(id) === 1) {
      return -1;
    }
    const query = `DELETE FROM emails WHERE id=?;`;
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows == 0) return 0;
    return 1;
  }
}
module.exports = new Email();
