const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hi PLatzi Master Api");
});

module.exports = router;
