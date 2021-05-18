const router = require("express").Router();
const controller = require("../controllers/product.controller");
const {
  productIdSchema,
  createProductSchema,
  updateProductSchema,
} = require("../schemas/product.schema");
const validationHandler = require("../middlewares/validationHandler");
//get products
router.get("/", controller.getAll);
//get product by id
router.get(
  "/:id",
  validationHandler({ id: productIdSchema }, "params"),
  controller.getById
);
//create Product
router.post(
  "/",
  validationHandler(createProductSchema),
  controller.createProduct
);
//update Product
router.put(
  "/:id",
  validationHandler({ id: productIdSchema }, "params"),
  validationHandler(updateProductSchema),
  controller.updateProduct
);
//delete Product
router.delete(
  "/:id",
  validationHandler({ id: productIdSchema }, "params"),
  controller.deleteProduct
);
module.exports = router;
