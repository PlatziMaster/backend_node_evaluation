const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Todo esta jalando bien');
})

module.exports = router