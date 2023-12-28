const pool = require('../config/database');

class Teacher {
  async getTeachers() {
    const query =
      'SELECT * FROM Teachers INNER JOIN users ON teachers.id=users.id';
    const [rows] = await pool.query(query);
    return rows;
  }

  async addTeacher(name, sex, dateOfBirth, phone, address, userId) {
    const query = `INSERT INTO Teachers(name, sex, dateofbirth, phone, address, id) VALUES(?, ?, ?, ?, ?, ?)`;

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

  async editTeacher(id, name, sex, dateofbirth, phone, address, email) {
    const query = 'UPDATE Users SET email=? WHERE id = ?';
    const [rows] = await pool.query(query, [email, id]);
    const query1 =
      'UPDATE Teachers SET name=?, sex=?, dateofbirth=?, phone=?, address=? WHERE id = ?';
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

  // async removeTeacher(id) {
  //   const query = `DELETE FROM teacherjoinclass WHERE idTeacher = ?`;
  //   const [row] = await pool.query(query, [id]);
  //   const query = `DELETE FROM Teachers WHERE id = ?`;
  //   const [row] = await pool.query(query, [id]);
  //   const deleteTeacherQuery = `DELETE FROM Teachers WHERE id = ?`;
  //   await pool.query(deleteTeacherQuery, [id]);

  //   const deleteUserQuery = `DELETE FROM Users WHERE id = ?`;
  //   return await pool.query(deleteUserQuery, [id]);
  // }

  async getTeacher(id) {
    const query = 'SELECT * FROM Teachers WHERE id = ?';
    const [rows] = await pool.query(query, [id]);
    return rows[0];
  }
}

module.exports = new Teacher();
