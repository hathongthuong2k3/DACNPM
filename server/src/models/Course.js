const pool = require("../config/database");
const Log = require("./Log");
class Course {
  async getCourses() {
    const query = `SELECT * FROM courses`;
    const [result] = await pool.query(query);
    return result;
  }
  async getCourse(name) {
    const query = `SELECT name,description,paid,prize,maxAttendDate FROM courses WHERE name=?`;
    const [result] = await pool.query(query, [name]);
    if (result.length == 0) return null;
    return result;
  }
  async addCourse(name, description, paid, prize, maxAttendDate) {
    const query = `SELECT * FROM courses WHERE name=?`;
    const [result] = await pool.query(query, [name]);
    if (result.length == 0) {
      const query1 = `INSERT INTO courses(name,description,paid,prize,maxAttendDate) VALUE (?,?,?,?,?)`;
      const [result1] = await pool.query(query1, [
        name,
        description,
        paid,
        prize,
        maxAttendDate,
      ]);
      return result1;
    }
    return null;
  }
  async updateCourse(oldname, name, description, paid, prize, maxAttendDate) {
    var result = [];
    if (oldname !== name) {
      const query = `SELECT * FROM courses WHERE name=?`;
      [result] = await pool.query(query, [name]);
    }
    if (result.length == 0) {
      const query1 = `UPDATE courses SET name = ?, description=?,paid=?,prize=?,maxAttendDate=? WHERE name = ?`;
      const [result1] = await pool.query(query1, [
        name,
        description,
        paid,
        prize,
        maxAttendDate,
        oldname,
      ]);
      if (result1.affectedRows == 0) return false;
      return true;
    }
    return null;
  }
  async deleteCourse(name) {
    const query1 = `SELECT COUNT(*) FROM classes INNER JOIN courses ON idCourse=courses.id WHERE courses.name=?`;
    const [result1] = await pool.query(query1, [name]);
    if (result1[0]["COUNT(*)"] == 0) {
      const query = `DELETE FROM courses WHERE name=?;`;
      const [result] = await pool.query(query, [name]);
      if (result.affectedRows == 0) return false;
      return true;
    }
    return false;
  }
}
module.exports = new Course();
