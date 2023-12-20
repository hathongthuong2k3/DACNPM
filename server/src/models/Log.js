const pool = require("../config/database");
class Log {
  async getLogs() {
    const query = `SELECT role,action,status,date,username FROM log INNER JOIN users ON users.id=idUser`;
    const [result] = await pool.query(query);
    return result;
  }
  async getLog(id) {
    const query = `SELECT * FROM log WHERE id =?`;
    const [result] = await pool.query(query, [id]);
    return result;
  }
  async addLog(idUser, action, date, status) {
    const query = `INSERT INTO log(idUser,action,date,status) VALUE (?,?,?,?)`;
    const [result] = await pool.query(query, [
      idUser,
      action,
      new Date(date),
      status,
    ]);
    return result;
  }
}
module.exports = new Log();
