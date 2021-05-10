const { response } = require('express');
const express = require('express');
const { MongoClient, ObjectId } = require("mongodb");
const CategoryController = require('../app/Controllers/CategoryController');

async function categoryRoutes(app) {
  let router = express.Router();
  let server;
  let database;
  let categoryController = new CategoryController('categories');

  app.use('/api/categories', router);

  router.get('/', async (req, res, next) => {
    let response = await categoryController.get();

    return res.status(200).json({
      message: "Listado de Categorías",
      data: response
    });
  });

  router.get('/:category_id', async (req, res, next) => {
    const { params: { category_id } } = req;

    let response = await categoryController.getDetail(category_id);

    return res.status(200).json({
      message: "Detalle de la categoría",
      data: response
    });
  });

  router.post('/', async(req, res, next) => {
    const {name, image} = req.body;

    if (!name || !image) {
      return res.status(400).json({
        message: "Los campos name o image son obligatorios."
      });
    }

    let response = await categoryController.post(req.body);

    if (response.insertedCount > 0) {
      return res.status(201).json({
        message: "La categoría ha sido agregada.",
        data: response.insertedId
      });
    } else {
      return res.status(500).json({
        message: "Hubo  un error, al momento de crear la categoría.",
      });
    }
  });

  router.put('/:category_id', async (req, res, next) => {
    const {
      params: { category_id },
      body: { name, image }
    } = req;

    if (name || image) {
      let response = await categoryController.update(category_id, req.body);

      return res.status(200).json({
        message: "La categoría ha sido actualizada",
        data: response
      });
    } else {
      return res.status(400).json({
        message: "Debe ingresar el campo name o image."
      });
    }

  });

  router.delete('/:category_id', async (req, res, next) => {
    const { params: { category_id } } = req;

    let response = await categoryController.delete(category_id);

    return res.status(200).json({
      message: "La categoría ha sido borrada",
      data: response
    });
  });

  router.get('/:category_id/products', async (req, res, next) => {
    const { params: { category_id } } = req;

    let response = await categoryController.products(category_id);

    return res.status(200).json({
      message: "Productos de la categoría",
      data: response
    });
  });
}

module.exports = categoryRoutes;
