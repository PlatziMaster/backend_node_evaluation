const express = require('express');

function productRoutes(app) {
  let router = express.Router();
  app.use('/api/products', router);

  router.get('/', (req, res, next) => {
    return res.status(200).json({
      error: "",
      data: []
    });
  })
}

module.exports = productRoutes;