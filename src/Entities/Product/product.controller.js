const ProductService = require("./product.service");
const controller = {};
const productsService = new ProductService();
controller.getAll = async (req, res) => {
  const { tags } = req.query;
  try {
    const products = await productsService.getAll({ tags });
    return res.status(200).json({
      data: products,
      message: "Products Listed",
    });
  } catch (error) {
    console.error(error);
  }
};
controller.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsService.getById({ id });
    return res.status(200).json({
      data: product,
      message: "Video reatrived",
    });
  } catch (error) {
    console.log(error);
  }
};
controller.createProduct = async (req, res) => {
  const { body: product } = req;
  try {
    const createProduct = await productsService.createProduct({ product });
    return res.status(201).json({
      data: createProduct,
      message: "Product Created",
    });
  } catch (error) {
    console.log(error);
  }
};
controller.updateProduct = async (req, res) => {
  const { body: product } = req;
  const { id } = req.params;
  try {
    const updateProductId = await productsService.updateProduct({
      id,
      product,
    });
    return res.status(200).json({
      data: updateProductId,
      message: "product updated",
    });
  } catch (error) {
    console.log(error);
  }
};
controller.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProductId = await productsService.deleteProduct({ id });
    return res.status(200).json({
      data: deleteProductId,
      message: "Product deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = controller;
