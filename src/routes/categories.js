const express = require('express')
const categoriesService = require('../services/categories')

function categoriesApi(app) {
  const router = express.Router()
  app.use('/api/categories', router)

  router.get('/', async function (req, res) {
    try {
      const categories = await categoriesService.getCategories()
      res.status(200).json(categories)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.get('/:id', async function (req, res) {
    try {
      const category = await categoriesService.getCategory(req.params.id)
      res.status(200).json(category)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.get('/:id/products', async function (req, res) {
    try {
      const category = await categoriesService.productsCategory(req.params.id)
      res.status(200).json(category)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.post('/', async function (req, res) {
    try {
      const createdCategory = await categoriesService.postCategory(req.body)
      res.status(201).json(createdCategory.ops[0])
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.put('/:id', async function (req, res) {
    try {
      const updatedCategory = await categoriesService.patchCategory(req.params.id, req.body)
      res.status(200).json(updatedCategory.value)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.delete('/:id', async function (req, res) {
    try {
      const deletedCategory = await categoriesService.deleteCategory(req.params.id)
      res.status(200).json(deletedCategory)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

}

module.exports = categoriesApi