const pool = require("../config/database");

class Student {
  async getStudents() {
    const query =
      "SELECT * FROM Students INNER JOIN users ON students.id=users.id";
    const [rows] = await pool.query(query);
    return rows;
  }

  async addStudent(name, sex, dateOfBirth, phone, address, userId) {
    const query = `INSERT INTO Students(name, sex, dateofbirth, phone, address, id) VALUES(?, ?, ?, ?, ?, ?)`;

    const [result] = await pool.query(query, [
      name,
      sex,
      dateOfBirth,
      phone,
      address,
      userId,
    ]);

    return result;
  }

  async editStudent(id, name, sex, dateofbirth, phone, address, email) {
    const query = "UPDATE Users SET email=? WHERE id = ?";
    const [rows] = await pool.query(query, [email, id]);
    const query1 =
      "UPDATE Students SET name=?, sex=?, dateofbirth=?, phone=?, address=? WHERE id = ?";
    const [rows1] = await pool.query(query1, [
      name,
      sex,
      new Date(dateofbirth),
      phone,
      address,
      id,
    ]);
    if (rows.changedRows == 0 && rows1.changedRows == 0) return false;
    return rows;
  }

  // async removeStudent(id) {
  //   const query = `DELETE FROM studentjoinclass WHERE idStudent = ?`;
  //   const [row] = await pool.query(query, [id]);
  //   const query = `DELETE FROM Students WHERE id = ?`;
  //   const [row] = await pool.query(query, [id]);
  //   const deleteStudentQuery = `DELETE FROM Students WHERE id = ?`;
  //   await pool.query(deleteStudentQuery, [id]);

  //   const deleteUserQuery = `DELETE FROM Users WHERE id = ?`;
  //   return await pool.query(deleteUserQuery, [id]);
  // }

  async getStudent(id) {
    const query = "SELECT * FROM Students WHERE id = ?";
    const [rows] = await pool.query(query, [id]);
    return rows[0];
  }
}

module.exports = new Student();
