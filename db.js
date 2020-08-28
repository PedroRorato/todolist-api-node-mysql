const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'todoNode'
});
  
db.connect((err) => {
    if(err) throw err;
    console.log('MySQL running...');
});

module.exports = db;