const mysql = require('mysql2');
const pool = mysql
  .createPool({
<<<<<<< HEAD
    host: "localhost",
    user: "root",
    password: "Alwaysbehappy@23",
    database: "englishbk",
=======
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bkec',
>>>>>>> 9a03af11662503505a883e36ab86f1d6fea5de36
  })
  .promise();
if (pool) {
  console.log('Connect successfully');
}
module.exports = pool;
