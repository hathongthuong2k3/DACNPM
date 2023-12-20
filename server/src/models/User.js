const pool = require("../config/database");
class User {
  async getUser(username, password) {
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    const [rows] = await pool.query(query, [username, password]);
    return rows[0];
  }
  async checkEmail(email, role) {
    const query = "SELECT * FROM emails WHERE email=? AND role=?";
    const [rows] = await pool.query(query, [email, role]);
    if (rows.length > 0) return true;
    return false;
  }
  async getInfo(id, role) {
    if (role == "student" || role == "teacher") {
      role += "s";
    }
    const query =
      `SELECT name,sex,dateofbirth,phone,address,email,image FROM ` +
      role +
      ` JOIN users ON users.id=` +
      role +
      `.id WHERE users.id =?`;
    const [rows] = await pool.query(query, [id]);
    console.log(id);
    return rows[0];
  }
  async authUser(id, role) {
    const query = "SELECT * FROM users WHERE id = ? AND role = ?";
    const [rows] = await pool.query(query, [id, role]);
    return rows[0];
  }
  async addUser(
    username,
    userpassword,
    name,
    email,
    dob,
    sex,
    phone,
    address,
    role
  ) {
    const query = "SELECT * FROM users WHERE username = ?";
    const [rows] = await pool.query(query, [username]);
    let query1, res1;
    if (rows.length == 0) {
      const query2 =
        "INSERT INTO users (username,password, email, role) VALUES (?, ?, ?, ?)";
      const [res2] = await pool.query(query2, [
        username,
        userpassword,
        email,
        role,
      ]);
      const check = "SELECT * FROM users WHERE username = ?";
      const [checkrow] = await pool.query(check, [username]);
      switch (role) {
        case "student":
          query1 =
            "INSERT INTO students (id,name, sex, dateofbirth, phone,address) VALUES (?, ?, ?, ?, ?,?)";
          [res1] = await pool.query(query1, [
            checkrow[0].id,
            name,
            sex,
            new Date(dob),
            phone,
            address,
          ]);
          break;
        case "teacher":
          query1 =
            "INSERT INTO teachers (id,name, sex, dateofbirth, phone,address) VALUES (?, ?, ?, ?, ?,?)";
          [res1] = await pool.query(query1, [
            checkrow[0].id,
            name,
            sex,
            new Date(dob),
            phone,
            address,
          ]);
          break;
        case "staff":
          query1 =
            "INSERT INTO staff (id,name, sex, dateofbirth, phone,address) VALUES (?, ?, ?, ?, ?,?)";
          [res1] = await pool.query(query1, [
            checkrow[0].id,
            name,
            sex,
            new Date(dob),
            phone,
            address,
          ]);
          break;
        case "admin":
          query1 =
            "INSERT INTO admin (id,name, sex, dateofbirth, phone,address) VALUES (?, ?, ?, ?, ?,?)";
          [res1] = await pool.query(query1, [
            checkrow[0].id,
            name,
            sex,
            new Date(dob),
            phone,
            address,
          ]);
          break;
        default:
          return null;
      }
      return res1 && res2;
    }
  }
  async updateUser(id, name, email, dob, sex, phone, address, role) {
    if (role == "student" || role == "teacher") {
      role += "s";
    }
    const query =
      `UPDATE ` +
      role +
      ` SET name = ?, dateofbirth = ?, sex = ?, phone = ?, address = ? WHERE id = ?`;
    const query1 = `UPDATE users SET email = ? WHERE id = ?`;
    const [result] = await pool.query(query, [
      name,
      new Date(dob),
      sex,
      phone,
      address,
      id,
    ]);
    const [result1] = await pool.query(query1, [email, id]);
    if (result.affectedRows == 0) return false;
    return true;
  }
}

module.exports = new User();
