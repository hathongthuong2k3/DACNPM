const pool = require("../config/database");
class Class {
  async getClasses() {
    var res = [];
    const query = `SELECT schedule,classes.id, classes.name,classes.address,maxStudent,startDate,endDate,maxStudent,courses.name AS courseName,teachers.name AS teacherName FROM classes JOIN courses ON classes.idCourse = courses.id LEFT JOIN teacherjoinclass ON classes.id = teacherjoinclass.idClass LEFT JOIN teachers ON teacherjoinclass.idTeacher=teachers.id`;
    const [result] = await pool.query(query);
    res.push(result);
    if (result && result.length > 0) {
      await Promise.all(
        result.map(async (el) => {
          const query1 = `SELECT COUNT(*) AS countStudent FROM studentjoinclass WHERE idClass=?`;
          const [result1] = await pool.query(query1, el.id);
          res.push(result1);
        })
      );
    }
    return res;
  }
  // async getClassess() {
  //   const query = `SELECT classes.id, classes.name FROM classes`;
  //   const [result] = await pool.query(query);
  //   return result;
  // }
  async getClass(name) {
    const query = `SELECT classes.name,classes.address,maxStudent,startDate,endDate,maxStudent,courses.name AS courseName,teachers.name AS teacherName FROM classes JOIN courses ON classes.idCourse = courses.id LEFT JOIN teacherjoinclass ON classes.id = teacherjoinclass.idClass LEFT JOIN teachers ON teacherjoinclass.idTeacher=teachers.id Where classes.name= ?`;
    const [result] = await pool.query(query, [name]);
    return result;
  }
  async addClass(
    name,
    idCourse,
    startDate,
    endDate,
    maxStudent,
    address,
    schedule
  ) {
    const query1 = `SELECT * FROM classes WHERE name=?`;
    const [result1] = await pool.query(query1, [name]);
    if (result1.length == 0) {
      const query = `INSERT INTO classes(name,idCourse,startDate,endDate,maxStudent,address,schedule) VALUE (?,?, ?, ?, ?, ?, ?)`;
      // const query = `INSERT INTO maxStudent,startDate,endDate,maxStudent,courses.name AS courseName,teachers.name AS teacherName FROM classes JOIN courses ON classes.idCourse = courses.id LEFT JOIN teacherjoinclass ON classes.id = teacherjoinclass.idClass LEFT JOIN teachers ON teacherjoinclass.idTeacher=teachers.id`;
      const [result] = await pool.query(query, [
        name,
        idCourse,
        new Date(startDate),
        new Date(endDate),
        maxStudent,
        address,
        schedule,
      ]);
      return result;
    }
    return null;
  }
  async updateClass(
    name,
    idCourse,
    startDate,
    endDate,
    maxStudent,
    address,
    schedule,
    oldname
  ) {
    const query = `UPDATE classes SET name = ?,idCourse=?, startDate=?, endDate=?, maxStudent=?, address=?, schedule=? WHERE name = ?`;
    const [result] = await pool.query(query, [
      name,
      idCourse,
      new Date(startDate),
      new Date(endDate),
      maxStudent,
      address,
      schedule,
      oldname,
    ]);
    if (result.affectedRows == 0) return false;
    return true;
  }
  async removeClass(name) {
    const query = `DELETE FROM classes WHERE name = ?`;
    const [result] = await pool.query(query, [name]);
    return result;
  }
}
module.exports = new Class();
