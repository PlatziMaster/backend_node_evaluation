"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../database'),
    connect = _require2.connect;

var router = Router();
router.get('/', function (req, res) {
  res.send('Hi PLatzi Master Api');
});
module.exports = router;