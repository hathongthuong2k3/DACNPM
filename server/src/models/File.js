const pool = require('../config/database');
class File {
  async getFiles() {
    const query = `SELECT
        teacherhasfile.id,
        teachers.name AS TeacherName,
        classes.name AS ClassName,
        teacherhasfile.fileName,
        teacherhasfile.filetype,
        teacherhasfile.fileAmount,
        teacherHasfile.fileStatus
    FROM
        teachers
    JOIN
        teacherjoinclass ON teachers.id = teacherjoinclass.idTeacher
    JOIN
        classes ON teacherjoinclass.idClass = classes.id
    JOIN
        teacherhasfile ON teachers.id = teacherhasfile.idTeacher;
    `;
    const [result] = await pool.query(query);
    return result;
  }
  async addFile(
    teacherName,
    className,
    fileName,
    filetype,
    fileAmount,
    fileStatus,
  ) {
    const query = `SELECT idTeacher, idClass 
        FROM
            teachers
        JOIN
            teacherjoinclass ON teachers.id = teacherjoinclass.idTeacher
        JOIN
            classes ON teacherjoinclass.idClass = classes.id
        WHERE
            teachers.name= ? AND classes.name = ?
        `;
    const [result] = await pool.query(query, [teacherName, className]);
    const query1 = `INSERT INTO TeacherHasFile (idTeacher,idClass, fileName, filetype, fileAmount, fileStatus) VALUE (?,?,?,?,?,?)`;
    const [result1] = await pool.query(query1, [
      result[0]['idTeacher'],
      result[0]['idClass'],
      fileName,
      filetype,
      fileAmount,
      fileStatus,
    ]);
    return result1;
  }
  async updateFile(id, fileName, filetype, fileAmount, fileStatus) {
    const query = `UPDATE TeacherHasFile SET  fileName=?, filetype=?, fileAmount=?, fileStatus=? WHERE id = ?`;
    const [result] = await pool.query(query, [
      fileName,
      filetype,
      fileAmount,
      fileStatus,
      id,
    ]);
    if (result.affectedRows == 0) return false;
    return true;
  }
  async deleteFile(id) {
    const query = `DELETE FROM TeacherHasFile WHERE id=?;`;
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows == 0) return false;
    return true;
  }
}
module.exports = new File();
