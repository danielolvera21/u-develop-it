const mysql = require('mysql2');
// Connect to datbase
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Brave2114!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);




module.exports = db;