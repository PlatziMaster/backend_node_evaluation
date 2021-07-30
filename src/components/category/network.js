const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../routes/response');

router.get('/', (req, res) => {
  controller.getCategories()
    .then((categoryList)=>{
      response.success(req, res, categoryList, 200);
    })
    .catch((err)=>{
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.get('/:id', (req, res) => {
  const filterCategory = req.query.id || null;
  controller.getCategory(filterCategory)
    .then((categoryList)=>{
      response.success(req, res, categoryList, 200);
    })
    .catch((err)=>{
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', (req, res) => {
  controller.addCategory(req.body.name)
    .then((newCategory) => {
      response.success(req, res, newCategory, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid data', 400, '[Controller error]', err);
    });
});

router.put('/:id', (req, res) => {
  controller.updateCategory(req.params.id, req.params.name)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', (req, res) => {
  controller.deleteCategory(req.params.id)
    .then(() => {
      response.success(req, res, `Category ${req.params.id} has been deleted`, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;