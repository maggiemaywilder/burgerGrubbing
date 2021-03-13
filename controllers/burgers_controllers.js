const express = require('express');

// imports the model so we can use database functions
const burger = require('../models/burgers');

const router = express.Router();

    // app.get('/', (req, res) => {
router.get('/', (req, res) => {
    burger.all((data) => {
        // define handlebars object where data gets put into view
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

    // app.post
router.post('/api/burger', (req, res) => {
    // do I need to add devoured to schema with default = false?
    burger.create(['burger_name', 'devoured'], [req.body.burger, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

// devour
router.put('/api/burger/:id', (req, res) => {
    // check that id is the one clicked
    const consummed = `id = ${req.params.id}`;
    // need to update devoured state to true
    // I need to dig into this function and what it does in the catsApp, and whether or not the cats app goes back and forth between sleepy and not, or only one way
    // if it toggles, need function to one switch to devoured iff devoured = false and ID exists
    burger.update(
        // {
        //     devoured: req.body.devoured,
        // },
        // condition,
        // (result) => {
        //     if (result.changedRows === 0) {
        //         return res.status(404).end();
        // (because id must not exist)
        //     } else return status goot
        // res.status(200).end();
        // })

})


module.exports = router;
