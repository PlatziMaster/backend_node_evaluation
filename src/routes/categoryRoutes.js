const express = require('express');

function categoryRoutes(app) {
  let router = express.Router();
  app.use('/api/categories', router);

  router.get('/', (req, res, next) => {
    return res.status(200).json({
      error: "",
      data: []
    });
  })
}

module.exports = categoryRoutes;
