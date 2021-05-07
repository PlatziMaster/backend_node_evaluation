const express = require('express')
const productsService = require('../services/products')


function productsApi(app) {
  const router = express.Router()
  app.use('/api/products', router)

  router.get('/', async function (req, res) {
    try {
      const products = await productsService.getProducts()
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.get('/:id', async function (req, res) {
    try {
      const product = await productsService.getProduct(req.params.id)
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.post('/', async function (req, res) {
    try {
      const product = await productsService.postProduct(req.body)
      res.status(201).json(product.ops[0])
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.put('/:id', async function (req, res) {
    try {
      const updatedProduct = await productsService.patchProduct(req.params.id, req.body)
      res.status(200).json(updatedProduct.value)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

  router.delete('/:id', async function (req, res) {
    try {
      const deletedProduct = await productsService.deleteProduct(req.params.id)
      res.status(200).json(deletedProduct)
    } catch (error) {
      res.status(500).json({ error })
    }
  })
}

module.exports = productsApi