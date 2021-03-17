const mysql = require('mysql');
const password = require('../private/connect');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: `${password}`,
    database: 'burgers_db',
});

connection.connect((err) => {
    if (err) {
        console.error(`Could not connect: ${err.stack}`);
        return;
    }
    console.log(`Connected with id ${connection.threadId}`);
});

module.exports = connection;