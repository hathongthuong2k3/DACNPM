const pool = require("../config/database");

class StudentJoinClass {
  async getStudentJoinClasses() {
    const query = `
    SELECT 
      studentjoinclass.id,
      idStudent, 
      studentjoinclass.idClass,
      students.name,
      studentjoinclass.attendDate,
      listening,
      writing,
      speaking,
      reading,
      studentjoinclass.status,
      paidStudent AS paid,
      prizeStudent AS prize,
      studentjoinclass.paidStatus,
      studentjoinclass.prizeStatus,
      classes.name AS className,
      teachers.name AS teacherName 
    FROM studentjoinclass 
    INNER JOIN students ON students.id=studentjoinclass.idStudent 
    INNER JOIN users ON users.id=students.id 
    INNER JOIN classes ON studentjoinclass.idClass=classes.id 
    INNER JOIN courses ON classes.idCourse=courses.id 
    INNER JOIN teacherjoinclass ON studentjoinclass.idClass=teacherjoinclass.idClass
    INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher`;
    const [rows] = await pool.query(query);
    return rows;
  }
  async getStudentJoinClass(id) {
    const query = `SELECT 
      studentjoinclass.id,
      idStudent, 
      studentjoinclass.idClass,
      students.name,
      studentjoinclass.attendDate,
      listening,
      writing,
      speaking,
      reading,
      studentjoinclass.status,
      startDate,
      endDate,
      paidStudent AS paid,
      prizeStudent AS prize,
      studentjoinclass.paidStatus,
      studentjoinclass.prizeStatus,
      classes.name AS className,
      teachers.name AS teacherName 
    FROM studentjoinclass 
    INNER JOIN students ON students.id=studentjoinclass.idStudent 
    INNER JOIN users ON users.id=students.id 
    INNER JOIN classes ON studentjoinclass.idClass=classes.id 
    INNER JOIN courses ON classes.idCourse=courses.id 
    INNER JOIN teacherjoinclass ON studentjoinclass.idClass=teacherjoinclass.idClass
    INNER JOIN teachers ON teachers.id=teacherjoinclass.idTeacher WHERE idStudent=?`;
    const [rows] = await pool.query(query, [id]);
    return rows;
  }
  async addStudentJoinClass(idStudent, idClass) {
    const query1 = "SELECT * FROM StudentJoinClass WHERE idClass= ?";

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
      "INSERT INTO StudentJoinClass(idStudent, idClass, attendDate,status,listening,writing,speaking,reading,paidStatus) VALUES(?, ?, 0,-1,0,0,0,0,0)";

    const [result] = await pool.query(query, [idStudent, idClass]);
    return result;
  }

  async editStudentJoinClass(
    idStudent,
    idClass,
    attendDate,
    listening,
    writing,
    speaking,
    reading,
    paidStatus,
    prizeStatus,
    id
  ) {
    const query =
      "UPDATE StudentJoinClass SET idStudent = ?, idClass = ?, attendDate = ?, listening=?,writing=?,speaking=?,reading = ?, paidStatus = ?, prizeStatus = ? WHERE id = ?";

    const [result] = await pool.query(query, [
      idStudent,
      idClass,
      attendDate,
      listening,
      writing,
      speaking,
      reading,
      paidStatus,
      prizeStatus,
      id,
    ]);
    return result;
  }
  async getNullClass() {
    const query = `
    SELECT
    C.id,
    C.name,
    COUNT(SJ.idStudent) AS total_students,
    C.maxStudent
FROM
    Classes C
LEFT JOIN
    StudentJoinClass SJ ON C.id = SJ.idClass
GROUP BY
    C.id
HAVING
    total_students < C.maxStudent;`;
    const [result] = await pool.query(query);
    return result;
  }
  async getNullRating() {
    const query = `SELECT studentjoinclass.id,idClass,students.name,attendDate,listening,writing,speaking,reading,status,paidStudent AS paid,prizeStudent AS prize,paidStatus,prizeStatus,classes.name AS className FROM studentjoinclass INNER JOIN students ON students.id=studentjoinclass.idStudent INNER JOIN users ON users.id=students.id INNER JOIN classes ON studentjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE listening=0,writing=0,speaking=0,reading =0`;
    const [result] = await pool.query(query);
    return result;
  }
  async getNullSalary() {
    const query = `SELECT studentjoinclass.id,idClass,students.name,attendDate,listening,writing,speaking,reading,status,paidStudent AS paid,prizeStudent AS prize,paidStatus,prizeStatus,classes.name AS className FROM studentjoinclass INNER JOIN students ON students.id=studentjoinclass.idStudent INNER JOIN users ON users.id=students.id INNER JOIN classes ON studentjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE paidStatus IS NULL`;
    const [result] = await pool.query(query);
    return result;
  }
  async getNullPrize() {
    const query = `SELECT studentjoinclass.id,idClass,students.name,prizeStatus,classes.name AS className FROM studentjoinclass INNER JOIN students ON students.id=studentjoinclass.idStudent INNER JOIN users ON users.id=students.id INNER JOIN classes ON studentjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE prizeStatus IS NULL`;
    const [result] = await pool.query(query);
    return result;
  }
  async getSalary() {
    const query = `SELECT
    studentjoinclass.id,
    idStudent,
    idClass,
    students.name,
    attendDate,
    listening,writing,speaking,reading,
    status,
    paidStudent AS paid,
    prizeStudent AS prize,
    paidStatus,
    prizeStatus,
    classes.name AS className
FROM
    studentjoinclass
INNER JOIN
    students ON students.id = studentjoinclass.idStudent
INNER JOIN
    users ON users.id = students.id
INNER JOIN
    classes ON studentjoinclass.idClass = classes.id
INNER JOIN
    courses ON classes.idCourse = courses.id;
`;
    const [result] = await pool.query(query);
    return result;
  }
  async getPrize() {
    const query = `SELECT studentjoinclass.id,idClass, idStudent,students.name,attendDate,listening,writing,speaking,reading,status,paidStudent AS paid,prizeStudent AS prize,paidStatus,prizeStatus,classes.name AS className FROM studentjoinclass INNER JOIN students ON students.id=studentjoinclass.idStudent INNER JOIN users ON users.id=students.id INNER JOIN classes ON studentjoinclass.idClass=classes.id INNER JOIN courses ON classes.idCourse=courses.id WHERE prizeStatus IS NOT NULL`;
    const [result] = await pool.query(query);
    return result;
  }
  async createSalary(paidStatus, id, idClass) {
    const query =
      "UPDATE StudentJoinClass SET paidStatus=? WHERE id = ? AND idClass = ?";
    const [result] = await pool.query(query, [paidStatus, id, idClass]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async createPrize(prizeStatus, id, idClass) {
    const query =
      "UPDATE StudentJoinClass SET prizeStatus=? WHERE id = ? AND idClass = ?";
    const [result] = await pool.query(query, [prizeStatus, id, idClass]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updateDate(attendDate, status, id, idClass) {
    const query2 =
      "SELECT * FROM classes INNER JOIN courses ON classes.idCourse=courses.id WHERE classes.id= ?";
    const [result2] = await pool.query(query2, [idClass]);
    if (!status) {
      if (Number(attendDate) < Number(result2[0].maxAttendDate)) {
        status = 0;
      } else if (Number(attendDate) === Number(result2[0].maxAttendDate)) {
        status = 1;
      } else {
        return -1;
      }
    }
    if (Number(attendDate) > Number(result2[0].maxAttendDate)) {
      return -1;
    }
    const query =
      "UPDATE StudentJoinClass SET attendDate = ?, status=? WHERE id = ?";
    const [result] = await pool.query(query, [attendDate, status, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updateRating(listening, writing, speaking, reading, id) {
    const query =
      "UPDATE StudentJoinClass SET listening=?,writing=?,speaking=?,reading=? WHERE id = ?";
    const [result] = await pool.query(query, [
      listening,
      writing,
      speaking,
      reading,
      id,
    ]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updateSalary(paidStatus, id) {
    const query = "UPDATE StudentJoinClass SET paidStatus=? WHERE id = ?";
    const [result] = await pool.query(query, [paidStatus, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async updatePrize(prizeStatus, id) {
    const query = "UPDATE StudentJoinClass SET prizeStatus=? WHERE id = ?";
    const [result] = await pool.query(query, [prizeStatus, id]);
    if (result.changedRows === 0) return false;
    return true;
  }
  async deleteSalary(id) {
    const query = "UPDATE StudentJoinClass SET paidStatus=NULL WHERE id = ?";
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows === 0) return false;
    return true;
  }
  async deletePrize(id) {
    const query = "UPDATE StudentJoinClass SET prizeStatus=NULL WHERE id = ?";
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows === 0) return false;
    return true;
  }
  async deleteStudentJoinClass(id) {
    const query = "DELETE FROM StudentJoinClass WHERE id = ?";

    const [result] = await pool.query(query, [id]);
    return result;
  }
}

module.exports = new StudentJoinClass();
