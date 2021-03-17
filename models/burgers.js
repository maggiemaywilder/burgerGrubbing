// import orm to create functions to interact with database
const orm = require('../config/orm');

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file
const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
        // what is cb()? this seems circular, the orm function also ends with cb(res).
    },

    create(burgerEntry, cb) {
        orm.insertOne('burgers', 'burger_name', `${burgerEntry}`, (res) => cb(res));
    },

    updateOne(value, condition, cb) {
        orm.updateOne('burgers', 'devoured', value, condition, (res) => cb(res));
    },

    deleteOne(value, cb) {
        orm.deleteOne('burgers', 'id', value, (res) => cb(res));
    }
    
};

// export functions for the controller
module.exports = burger;