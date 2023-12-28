const pool = require('../config/database');
class Sponsor {
  async getSponsors() {
    const query = `SELECT * FROM sponsors`;
    const [result] = await pool.query(query);
    return result;
  }
  async addSponsor(name, amount, status) {
    const query1 = `INSERT INTO sponsors(name,amount,status) VALUE (?,?,?)`;
    const [result1] = await pool.query(query1, [name, amount, status]);
    return result1;
  }
  async updateSponsor(id, name, amount, status) {
    const query = `UPDATE sponsors SET name=?,amount=?,status=? WHERE id = ?`;
    const [result] = await pool.query(query, [name, amount, status, id]);
    if (result.affectedRows == 0) return false;
    return true;
  }
  async deleteSponsor(id) {
    const query = `DELETE FROM sponsors WHERE id=?;`;
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows == 0) return false;
    return true;
  }
}
module.exports = new Sponsor();
