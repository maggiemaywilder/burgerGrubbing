const express = require('express');

// imports the model so we can use database functions
const burger = require('../models/burgers');

const router = express.Router();

    // app.get('/', (req, res) => {
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        // define handlebars object where data gets put into view
        const hbsObject = {
// is this supposed to be burgers or burger? I think this just has to match what the handlebars pages are looking for, so burgers is fine
            burgers: data,
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

    // app.post create new burger
router.post('/api/burger', (req, res) => {
    burger.create(req.body.burgerName, (result) => {
        // console.log(req.body, 'controller25')
        res.json({ id: result.insertId });
    });
});

// devour
router.put('/api/burger/:id', (req, res) => {
    // check that id is the one clicked
    const condition = `id = ${req.params.id}`;
    burger.updateOne('devoured', condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
    // (because id must not exist)
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;
