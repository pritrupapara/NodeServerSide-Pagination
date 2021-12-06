const mysql = require('mysql');

//Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user-datatable'
});

//Connection
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = db;