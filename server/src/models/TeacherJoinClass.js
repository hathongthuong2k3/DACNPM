const pool = require('../config/database');

class TeacherJoinClass {
  async getTeacherJoinClasses() {
    const query =
      'SELECT teacherjoinclass.id,teachers.name,attendDate,rating,status,paid,prize,paidStatus,prizeStatus,classes.name AS className FROM teacherjoinclass INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher INNER JOIN users ON users.id=teachers.id INNER JOIN classes ON teacherjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id';
    const [rows] = await pool.query(query);
    return rows;
  }
  async addTeacherJoinClass(idTeacher, idClass, attendDate) {
    const query =
      'INSERT INTO TeacherJoinClass(idTeacher, idClass, attendDate) VALUES(?, ?, ?)';

    const [result] = await pool.query(query, [idTeacher, idClass, attendDate]);
    return result;
  }

  async editTeacherJoinClass(
    idTeacher,
    idClass,
    attendDate,
    rating,
    paidStatus,
    prizeStatus,
    id,
  ) {
    const query =
      'UPDATE TeacherJoinClass SET idTeacher = ?, idClass = ?, attendDate = ?, rating = ?, paidStatus = ?, prizeStatus = ? WHERE id = ?';

    const [result] = await pool.query(query, [
      idTeacher,
      idClass,
      attendDate,
      rating,
      paidStatus,
      prizeStatus,
      id,
    ]);
    return result;
  }
  async updateDate(attendDate, status, id) {
    const query =
      'UPDATE TeacherJoinClass SET attendDate = ?, status=? WHERE id = ?';
    const [result] = await pool.query(query, [attendDate, status, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updateRating(rating, id) {
    const query = 'UPDATE TeacherJoinClass SET rating=? WHERE id = ?';
    const [result] = await pool.query(query, [rating, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updateSalary(paidStatus, id) {
    const query = 'UPDATE TeacherJoinClass SET paidStatus=? WHERE id = ?';
    const [result] = await pool.query(query, [paidStatus, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updatePrize(prizeStatus, id) {
    const query = 'UPDATE TeacherJoinClass SET prizeStatus=? WHERE id = ?';
    const [result] = await pool.query(query, [prizeStatus, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async deleteSalary(id) {
    const query = 'UPDATE TeacherJoinClass SET paidStatus=NULL WHERE id = ?';
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows === 0) return false;
    return true;
  }
  async deletePrize(id) {
    const query = 'UPDATE TeacherJoinClass SET prizeStatus=NULL WHERE id = ?';
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows === 0) return false;
    return true;
  }
  async deleteTeacherJoinClass(id) {
    const query = 'DELETE FROM TeacherJoinClass WHERE id = ?';

    const [result] = await pool.query(query, [id]);
    return result;
  }
}

module.exports = new TeacherJoinClass();
