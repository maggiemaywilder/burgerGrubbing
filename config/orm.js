// Import MySQL connection.
const connection = require('./connection');

const ORM = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;                ;
            cb(result);
        });
    },

    // define all values in params, no hard coding
    insertOne(table, cols, val, cb) {
        let queryString = `INSERT INTO ${table}`;
        queryString += ` (${cols}) `
        `VALUES (${val})`;
        console.log(queryString);

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            console.log(res)
            cb(res);
        }); 
    },

    // I don't understand the objColVals and the second queryString += value
    updateOne(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`
        queryString += ` SET `;
        queryString += objToSql(objColVals);
        queryString += ` WHERE `;
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    },

};

module.exports = ORM;
