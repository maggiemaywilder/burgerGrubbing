// Import MySQL connection.
const connection = require('./connection');
const mysql = require('mysql');

const ORM = {
    selectAll(table, cb) {
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;                
            cb(res);
        });
    },

    // making a new burger
    // define all values in params, no hard coding
    insertOne(table, column, value, cb) {
        let queryString = `INSERT INTO ${table}`;
        queryString += ` (`;
        queryString += column;
        queryString += `) VALUES ('`;
        queryString += value;
        queryString += `')`;
        console.log(queryString, 'orm19');

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            console.log(res, 'orm23')
            cb(res);
        }); 
    },

    // I don't understand the objColVals and the second queryString += value()
    updateOne(table, column, value, condition, cb) {
        let queryString = `UPDATE ${table}`
        queryString += ` SET `;
        queryString += column;
        queryString += `=`;
        queryString += value;
        queryString += ` WHERE `;
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    deleteOne(table, column, value, cb) {
        let queryString = `DELETE FROM `;
        queryString += table;
        queryString += ` WHERE `;
        queryString += column;
        queryString += `=`;
        queryString += value;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    
};

module.exports = ORM;
