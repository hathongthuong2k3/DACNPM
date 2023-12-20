const mysql = require("mysql2");
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Alwaysbehappy@23",
    database: "englishbk",
  })
  .promise();
if (pool) {
  console.log("Connect successfully");
}
module.exports = pool;
