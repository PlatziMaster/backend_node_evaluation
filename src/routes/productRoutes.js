const express = require('express');
const ProductController = require('../app/Controllers/ProductController');

function productRoutes(app) {
  let router = express.Router();
  let productController = new ProductController('products');

  app.use('/api/products', router);

  router.get('/', async (req, res, next) => {
    let response = await productController.get();

    return res.status(200).json({
      message: "Listado de Productos",
      data: response
    });
  })

  router.get('/:product_id', async (req, res, next) => {
    const { params: { product_id } } = req;

    let response = await productController.getDetail(product_id);

    return res.status(200).json({
      message: "Detalle del producto",
      data: response
    });
  });

  router.post('/', async(req, res, next) => {
    const {
      body: { name, price, description, categoryId, image }
    } = req;

    if (!name || !price || !description || !categoryId || !image) {
      return res.status(400).json({
        message: "Los campos name, price, description, categoryId e image son obligatorios."
      });
    }

    let response = await productController.post(req.body);

    if (response.insertedCount > 0) {
      return res.status(201).json({
        message: "El producto ha sido agregado.",
        data: response.insertedId
      });
    } else {
      return res.status(500).json({
        message: "Hubo  un error, al momento de crear el produucto.",
      });
    }
  });

  router.put('/:product_id', async(req, res, next) => {
    const {
      body: { name, price, description, categoryId, image },
      params: { product_id }
    } = req;

    if (name || price || description || categoryId || image) {
      let response = await productController.update(product_id, req.body);

      return res.status(200).json({
        message: "El producto ha sido actualizado",
        data: response
      });
    } else {
      return res.status(400).json({
        message: "Los campos name, price, description, categoryId o image deben ir incluidos para actualizarlos."
      });
    }
  });

  router.delete('/:product_id', async (req, res, next) => {
    const { params: { product_id } } = req;

    let response = await productController.delete(product_id);

    return res.status(200).json({
      message: "El producto ha sido borrado.",
      data: response
    });
  });
}

module.exports = productRoutes;