const mysql = require("mysql");

// make a database connection
const conn = mysql.createConnection({
  host: "srv91.niagahoster.com",
  user: "u9495015_suryakumara",
  database: "u9495015_dbrestapi",
  password: "S4murai&k",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql terkoneksi");
});

module.exports = conn;
