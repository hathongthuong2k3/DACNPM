const pool = require("../config/database");

class TeacherJoinClass {
  async getTeacherJoinClasses() {
    const query =
      "SELECT teacherjoinclass.id,idTeacher,idClass,teachers.name,attendDate,rating,status,paidTeacher,prizeTeacher AS prize,paidStatus,prizeStatus,classes.name AS className FROM teacherjoinclass INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher INNER JOIN users ON users.id=teachers.id INNER JOIN classes ON teacherjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id";
    const [rows] = await pool.query(query);
    return rows;
  }
  async getTeacherJoinClass(id) {
    const query =
      "SELECT teacherjoinclass.id,idTeacher,idClass,teachers.name,attendDate,rating,status,paidTeacher,prizeTeacher AS prize,paidStatus,prizeStatus,classes.name AS className,startDate,endDate  FROM teacherjoinclass INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher INNER JOIN users ON users.id=teachers.id INNER JOIN classes ON teacherjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE idTeacher=?";
    const [rows] = await pool.query(query, [id]);
    return rows;
  }
  async addTeacherJoinClass(idTeacher, idClass) {
    const query1 = "SELECT * FROM TeacherJoinClass WHERE idClass= ?";

    const [result1] = await pool.query(query1, [idClass]);
    const query2 =
      "SELECT * FROM classes INNER JOIN courses ON classes.idCourse=courses.id WHERE classes.id= ?";

    const [result2] = await pool.query(query2, [idClass]);
    if (result1.length > 0) {
      if (
        result1[0].status === 1 &&
        result1[0].attendDate < result2[0].maxAttendDate
      )
        return null;
      else if (result1[0].status === 1 || result1[0].status === 0) return null;
    }
    const query =
      "INSERT INTO TeacherJoinClass(idTeacher, idClass, attendDate,status,rating,paidStatus) VALUES(?, ?, 0,-1,0,0)";

    const [result] = await pool.query(query, [idTeacher, idClass]);
    return result;
  }

  async editTeacherJoinClass(
    idTeacher,
    idClass,
    attendDate,
    rating,
    paidStatus,
    prizeStatus,
    id
  ) {
    const query =
      "UPDATE TeacherJoinClass SET idTeacher = ?, idClass = ?, attendDate = ?, rating = ?, paidStatus = ?, prizeStatus = ? WHERE id = ?";

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
  async getNullClass() {
    const query = `
    SELECT c.id,c.name
    FROM Classes c
    LEFT JOIN TeacherJoinClass tjc ON c.id = tjc.idClass
    JOIN Courses cr ON c.idCourse = cr.id
    WHERE (tjc.id IS NULL OR (tjc.status = 1 AND cr.maxAttendDate > tjc.attendDate));`;
    const [result] = await pool.query(query);
    return result;
  }
  async getNullRating() {
    const query = `SELECT teacherjoinclass.id,idClass,teachers.name,attendDate,rating,status,paidTeacher,prizeTeacher AS prize,paidStatus,prizeStatus,classes.name AS className FROM teacherjoinclass INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher INNER JOIN users ON users.id=teachers.id INNER JOIN classes ON teacherjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE rating =0`;
    const [result] = await pool.query(query);
    return result;
  }
  async getNullSalary() {
    const query = `SELECT teacherjoinclass.id,idClass,teachers.name,attendDate,rating,status,paidTeacher,prizeTeacher AS prize,paidStatus,prizeStatus,classes.name AS className FROM teacherjoinclass INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher INNER JOIN users ON users.id=teachers.id INNER JOIN classes ON teacherjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE paidStatus IS NULL`;
    const [result] = await pool.query(query);
    return result;
  }
  async getNullPrize() {
    const query = `SELECT teacherjoinclass.id,idClass,teachers.name,prizeStatus,classes.name AS className FROM teacherjoinclass INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher INNER JOIN users ON users.id=teachers.id INNER JOIN classes ON teacherjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE prizeStatus IS NULL`;
    const [result] = await pool.query(query);
    return result;
  }
  async getSalary() {
    const query = `SELECT
    teacherjoinclass.id,
    idTeacher,
    idClass,
    teachers.name,
    attendDate,
    rating,
    status,
    attendDate * paidTeacher / maxAttendDate AS paid,
    prizeTeacher AS prize,
    paidStatus,
    prizeStatus,
    classes.name AS className
FROM
    teacherjoinclass
INNER JOIN
    teachers ON teachers.id = teacherjoinclass.idTeacher
INNER JOIN
    users ON users.id = teachers.id
INNER JOIN
    classes ON teacherjoinclass.idClass = classes.id
INNER JOIN
    courses ON classes.idCourse = courses.id;
`;
    const [result] = await pool.query(query);
    return result;
  }
  async getPrize() {
    const query = `SELECT teacherjoinclass.id,idClass, idTeacher,teachers.name,attendDate,rating,status,paidTeacher,prizeTeacher AS prize,paidStatus,prizeStatus,classes.name AS className FROM teacherjoinclass INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher INNER JOIN users ON users.id=teachers.id INNER JOIN classes ON teacherjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE prizeStatus IS NOT NULL`;
    const [result] = await pool.query(query);
    return result;
  }
  async createSalary(paidStatus, id, idClass) {
    const query =
      "UPDATE TeacherJoinClass SET paidStatus=? WHERE id = ? AND idClass = ?";
    const [result] = await pool.query(query, [paidStatus, id, idClass]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async createPrize(prizeStatus, id, idClass) {
    const query =
      "UPDATE TeacherJoinClass SET prizeStatus=? WHERE id = ? AND idClass = ?";
    const [result] = await pool.query(query, [prizeStatus, id, idClass]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updateDate(attendDate, status, id, idClass) {
    const query2 =
      "SELECT * FROM classes INNER JOIN courses ON classes.idCourse=courses.id WHERE classes.id= ?";
    const [result2] = await pool.query(query2, [idClass]);
    console.log(result2);
    if (!status) {
      if (attendDate < result2[0].maxAttendDate) {
        status = 0;
      } else if (Number(attendDate) === Number(result2[0].maxAttendDate)) {
        status = 1;
      } else {
        return -1;
      }
    }
    const query =
      "UPDATE TeacherJoinClass SET attendDate = ?, status=? WHERE id = ?";
    const [result] = await pool.query(query, [attendDate, status, id]);
    console.log(status);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updateRating(rating, id) {
    const query = "UPDATE TeacherJoinClass SET rating=? WHERE id = ?";
    const [result] = await pool.query(query, [rating, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updateSalary(paidStatus, id) {
    const query = "UPDATE TeacherJoinClass SET paidStatus=? WHERE id = ?";
    const [result] = await pool.query(query, [paidStatus, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updatePrize(prizeStatus, id) {
    const query = "UPDATE TeacherJoinClass SET prizeStatus=? WHERE id = ?";
    const [result] = await pool.query(query, [prizeStatus, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async deleteSalary(id) {
    const query = "UPDATE TeacherJoinClass SET paidStatus=NULL WHERE id = ?";
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows === 0) return false;
    return true;
  }
  async deletePrize(id) {
    const query = "UPDATE TeacherJoinClass SET prizeStatus=NULL WHERE id = ?";
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows === 0) return false;
    return true;
  }
  async deleteTeacherJoinClass(id) {
    const query = "DELETE FROM TeacherJoinClass WHERE id = ?";

    const [result] = await pool.query(query, [id]);
    return result;
  }
}

module.exports = new TeacherJoinClass();
