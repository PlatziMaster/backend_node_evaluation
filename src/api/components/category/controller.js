const express = require('express');
const router = express.Router();
const responses = require('../../network/responses');

const store = require('./store');

router.get('/', async (req, res) => {
  try {
    const categories = await store.getCategories();
    responses.success(req, res, categories);
  } catch (e) {
    responses.error(req, res, 'Error getting Categories', e);
  }
});

router.post('/', async (req, res) => {
  if (!req.body.name) {
    return responses.error(req, res, 'Name is required', null, 400);
  }
  try {
    const newCategory = await store.addCategory(req.body.name);
    responses.success(req, res, newCategory);
  } catch (e) {
    responses.error(req, res, 'Error creating Category', e);
  }
})

router.put('/:id', async (req, res) => {
  if (!req.body.name) {
    return responses.error(req, res, 'Name is required', null, 400);
  }
  try {
    await store.updateCategory(req.params.id, req.body.name);
    responses.success(req, res);
  } catch (e) {
    responses.error(req, res, `Error updating Category`, e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await store.deleteCategory(req.params.id);
    responses.success(req, res);
  } catch (e) {
    responses.error(req, res, `Error deleting Category`, e);
  }
});

module.exports = router;
