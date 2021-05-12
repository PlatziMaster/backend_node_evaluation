var express = require("express");
var router = express.Router();

router.get("/", (req, res) => res.send("Service is up!"));

module.exports = router;