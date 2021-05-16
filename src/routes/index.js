const router = require("express").Router();
const apiProductRouter = require("../Entities/Product/index");

router.use("/product", apiProductRouter);
module.exports = router;
