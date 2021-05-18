const router = require("express").Router();
const controller = require("./product.controller");

//get products
router.get("/", controller.getAll);
//get product by id
router.get("/:id", controller.getById);
//create Product
router.post("/", controller.createProduct);
//update Product
router.put("/:id", controller.updateProduct);
//delete Product
router.delete("/:id", controller.deleteProduct);
module.exports = router;
