const ProductService = require("./../services/product.service");
const controller = {};
const productsService = new ProductService();
controller.getAll = async (req, res) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
  }
};
controller.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsService.getById({ id });
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
controller.createProduct = async (req, res) => {
  const { body: product } = req;
  try {
    const createProduct = await productsService.createProduct({ product });
    return res.status(201).json(createProduct);
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
    return res.status(200).json(updateProductId);
  } catch (error) {
    console.log(error);
  }
};
controller.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProductId = await productsService.deleteProduct({ id });
    return res.status(200).json(true);
  } catch (error) {
    console.log(error);
  }
};

module.exports = controller;
