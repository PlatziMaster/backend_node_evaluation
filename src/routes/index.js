const router = require("express").Router();
const apiProductRouter = require("./product.routes");
const apiCategoriesRouter = require("./category.routes");
router.use("/products", apiProductRouter);
router.use("/categories", apiCategoriesRouter);
module.exports = router;
