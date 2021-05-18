const controller = {};
const CategoryService = require("./category.service");
const categoryService = new CategoryService();
controller.getAll = async (req, res) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(200).json({
      data: categories,
      message: "Categories Listed",
    });
  } catch (error) {
    console.log(error);
  }
};
controller.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryService.getById({ id });
    return res.status(200).json({
      data: category,
      message: "category reatrived",
    });
  } catch (error) {
    console.log(error);
  }
};
controller.createCategory = async (req, res) => {
  const { body: category } = req;
  try {
    const createCategory = await categoryService.createCategory({ category });
    return res.status(201).json(createCategory);
  } catch (error) {
    console.log(error);
  }
};
controller.updateCategory = async (req, res) => {
  const { body: category } = req;
  const { id } = req.params;
  try {
    const updateCategoryId = await categoryService.updateCategory({
      id,
      category,
    });
    return res.status(200).json({
      data: updateCategoryId,
      message: "category updated",
    });
  } catch (error) {
    console.log(error);
  }
};
controller.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCategoryId = await categoryService.deleteCategory({ id });
    return res.status(200).json({
      data: deleteCategoryId,
      message: "Category deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
controller.productsByCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const productsByCategory = await categoryService.getProductsByCategory({
      id,
    });
    return res.status(200).json({
      data: productsByCategory,
      message: "Products by category Listed",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = controller;
