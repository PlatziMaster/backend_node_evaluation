var express = require('express'); 
const productViews = require("./views/product")
const categoryViews = require("./views/category")

const router = express.Router();

// Product Views
router.get("/api/products", productViews.get_list);
router.get("/api/products/:productId", productViews.get);
router.delete("/api/products/:productId", productViews.delete);
router.put("/api/products/:productId", productViews.update);
router.post("/api/products", productViews.post);

// Category Views
router.get("/api/categories", categoryViews.get_list);
router.get("/api/categories/:categoryId", categoryViews.get);
router.delete("/api/categories/:categoryId", categoryViews.delete);
router.put("/api/categories/:categoryId", categoryViews.update);
router.post("/api/categories", categoryViews.post);
router.get('/api/categories/:categoryId/products', categoryViews.get_products)


module.exports = router