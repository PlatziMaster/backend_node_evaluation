const express = require('express');
const cors = require('cors');
const router = require('./router')
const bodyParser = require("body-parser")

function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(router)

    // ADD YOUR ROUTES
    return app;
}

module.exports = createApp;
