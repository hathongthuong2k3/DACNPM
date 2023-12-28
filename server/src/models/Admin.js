const pool = require('../config/database');
class Admin {
  async getAdmin(id, role) {
    const query = `SELECT * FROM ` + role + ` WHERE id = ?`;
    const [result] = await pool.query(query, [id]);
    return result[0];
  }
  async getIncome() {
    const query = `SELECT
    students.name AS name,
    classes.name AS className,
    courses.paid AS pay,
    studentjoinclass.paidStatus AS status
FROM
    students
JOIN
    studentjoinclass ON students.id = studentjoinclass.idStudent
JOIN
    classes ON studentjoinclass.idClass = classes.id
JOIN
    courses ON classes.idCourse = courses.id
WHERE studentjoinclass.paidStatus IS NOT NULL
`;
    const [result] = await pool.query(query);
    return result;
  }
  async getOutcome() {
    const query = `SELECT
    students.name AS name,
    classes.name AS className,
    courses.paid AS prize,
    studentjoinclass.prizeStatus AS status
FROM
    students
JOIN
    studentjoinclass ON students.id = studentjoinclass.idStudent
JOIN
    classes ON studentjoinclass.idClass = classes.id
JOIN
    courses ON classes.idCourse = courses.id
WHERE studentjoinclass.prizeStatus IS NOT NULL
UNION ALL
SELECT
    teachers.name AS name,
    classes.name AS className,
    courses.paid AS prize,
    teacherjoinclass.prizeStatus AS status
FROM
    teachers
JOIN
    teacherjoinclass ON teachers.id = teacherjoinclass.idTeacher
JOIN
    classes ON teacherjoinclass.idClass = classes.id
JOIN
    courses ON classes.idCourse = courses.id
WHERE teacherjoinclass.prizeStatus IS NOT NULL
UNION ALL
SELECT
    teachers.name AS name,
    classes.name AS className,
    courses.paid AS prize,
    teacherjoinclass.paidStatus AS status
FROM
    teachers
JOIN
    teacherjoinclass ON teachers.id = teacherjoinclass.idTeacher
JOIN
    classes ON teacherjoinclass.idClass = classes.id
JOIN
    courses ON classes.idCourse = courses.id
WHERE teacherjoinclass.paidStatus IS NOT NULL
UNION ALL
SELECT
    staff.name AS name,
    0 AS className,
    paid AS prize,
    managestaff.paidStatus AS status
FROM
    staff
JOIN
    managestaff ON idStaff=id
WHERE paidStatus IS NOT NULL
UNION ALL
SELECT
    staff.name AS name,
    0 AS className,
    prize,
    managestaff.prizeStatus AS status
FROM
    staff
JOIN
    managestaff ON idStaff=id
WHERE prizeStatus IS NOT NULL
`;
    const [result] = await pool.query(query);
    return result;
  }
  async getStat() {
    var res = [];
    var query = `SELECT COUNT(*) AS countAccess FROM log`;
    var [result] = await pool.query(query);
    res.push(result[0]);
    query = `SELECT COUNT(*) AS countTeacher FROM teachers`;
    [result] = await pool.query(query);
    res.push(result[0]);
    query = `SELECT COUNT(*) AS countStudent FROM students`;
    [result] = await pool.query(query);
    res.push(result[0]);
    query = `SELECT COUNT(*) AS countStaff FROM staff`;
    [result] = await pool.query(query);
    res.push(result[0]);
    return res;
  }
}
module.exports = new Admin();
