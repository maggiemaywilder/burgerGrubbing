const password = require('../private/connect');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: `${password}`,
    database: 'hr_db',
});