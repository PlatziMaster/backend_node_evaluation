const express = require("express");
const categoriesRoutes = require("./categories.route");
const productsRoutes = require("./products.route");

const router = express.Router();

const apiV1 = router.use("/api", router);
apiV1.use("/categories", categoriesRoutes);
apiV1.use("/products", productsRoutes);

module.exports = router
