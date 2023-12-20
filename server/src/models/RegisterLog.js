const pool = require('../config/database');
class RegisterLog {
  async getRegisterLogs() {
    const query = `SELECT username,users.email,date,role FROM registerlog INNER JOIN users On idUser = users.id`;
    const [result] = await pool.query(query);
    return result;
  }
  async getRegisterLog(id) {
    const query = `SELECT username,users.email,date,role FROM registerlog INNER JOIN users On idUser = users.id WHERE users.id =?`;
    const [result] = await pool.query(query, [id]);
    return result;
  }
  async addRegisterLog(email, date, username) {
    const query1 = `SELECT * FROM users where username=?`
    const [result1] = await pool.query(query1, [username]);
    const query = `INSERT INTO registerlog(idUser,email,date) VALUE (?,?,?)`;
    const [result] = await pool.query(query, [result1[0].id, email, new Date(date)]);
    return result;
  }
}
module.exports = new RegisterLog();
