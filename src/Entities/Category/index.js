const controller = require("./category.controller");

const router = require("express").Router();

//get categories
router.get("/", controller.getAll);
//get category by id
router.get("/:id", controller.getById);
//create category
router.post("/", controller.createCategory);
//update category
router.put("/:id", controller.updateCategory);
//delete category
router.delete("/:id", controller.deleteCategory);
module.exports = router;
