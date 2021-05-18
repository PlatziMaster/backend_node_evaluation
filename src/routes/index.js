const router = require("express").Router();
const apiProductRouter = require("../Entities/Product/index");
const apiCategoriesRouter = require("../Entities/Category/index");
router.use("/products", apiProductRouter);
router.use("/categories", apiCategoriesRouter);
module.exports = router;
