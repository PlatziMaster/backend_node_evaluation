const controller = require("../controllers/category.controller");
const router = require("express").Router();
const {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
} = require("../schemas/category.schema");

const validationHandler = require("../middlewares/validationHandler");
//get categories
router.get("/", controller.getAll);
//get category by id
router.get(
  "/:id",
  validationHandler({ id: categoryIdSchema }, "params"),
  controller.getById
);
//create category
router.post(
  "/",
  validationHandler(createCategorySchema),
  controller.createCategory
);
//update category
router.put(
  "/:id",
  validationHandler({ id: categoryIdSchema }, "params"),
  validationHandler(updateCategorySchema),
  controller.updateCategory
);
//delete category
router.delete(
  "/:id",
  validationHandler({ id: categoryIdSchema }, "params"),
  controller.deleteCategory
);
//products byCategory
router.get("/:id/products", controller.productsByCategory);
module.exports = router;
