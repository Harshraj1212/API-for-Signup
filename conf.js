const mysql = require("mysql2/promise");
const db =  mysql.createPool({
    host: "localhost",
    user: 'root',
    password: 'yourpassword',
    database: 'auth_db',
});

module.exports = db;