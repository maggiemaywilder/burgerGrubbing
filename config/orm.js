// Import MySQL connection.
const connection = require('./connection');

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
  
    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      let value = ob[key];
      // Check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(`${key}=${value}`);
      }
    }
  
    // Translate array of strings to a single comma-separated string
    return arr.toString();
  };
  
const ORM = {
    selectAll(table, cb) {
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;                
            cb(res);
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

    // I don't understand the objColVals and the second queryString += value()
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
