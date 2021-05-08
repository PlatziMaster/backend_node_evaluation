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
    
    return app;
}

module.exports = createApp;
