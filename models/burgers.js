// import orm to create functions to interact with database
const orm = require('../config/orm');

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file
const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
        // what is cb()? this seems circular, the orm function also ends with cb(res).
    },

    insertOne(burgerEntry, cb) {
        orm.insertOne('burgers', 'burger_name', `${burgerEntry}`, (res) => cb(res));
    },

    updateOne(objColVals, condition, cb) {
        // I think objColVals and condition comes from db
        // objColVals example {col1: value1, col2: value2}
        // need to find objToSql function in catApp
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res))
    },
    
};

// export functions for the controller
module.exports = burger;