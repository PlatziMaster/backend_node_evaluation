const express = require('express');
const cors = require('cors');
const categories = require('../e2e/categories.e2e')


function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/catwegories', categories);
    // ADD YOUR ROUTES
    app.get('/', (req, res) => {
        res.json({
            message: 'Hello World'
        });
    });
    app.get('/:name', (req, res) => {
        let name = req.params.name;

        res.json({
            message: `Hello ${name}`
        });
    });
    
    // app.post('/create-data', function (req, res) {
    //     // Sending request to create a data
    //     db.collection('data').insertOne({ text: req.body.text }, function (
    //         err,
    //         info
    //     ) {
    //         res.json(info.ops[0])
    //     })
    // })
    // // app.use('/api/categoire',require('./e2e/categories.e2e'))
    // app.get('/', function (req, res) {
    //     // getting all the data
    //     db.collection('data')
    //         .find()
    //         .toArray(function (err, items) {
    //             res.send(items)
    //         })
    // })
    return app;
}

module.exports = createApp;
