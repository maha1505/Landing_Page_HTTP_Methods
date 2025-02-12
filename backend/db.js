const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",  // Replace with your MySQL password
  database: "academy",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

module.exports = connection;
