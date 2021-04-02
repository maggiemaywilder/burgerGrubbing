const mysql = require('mysql');
// const password = require('../private/connect');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'rootroot',
        // password: `${password}`,
        database: 'burgers_db',
    });
}


connection.connect((err) => {
    if (err) {
        console.error(`Could not connect: ${err.stack}`);
        return;
    }
    console.log(`Connected with id ${connection.threadId}`);
});

module.exports = connection;