const express = require('express');
const router = express.Router();
const {find, findOne, insertOne, updateOne, deleteOne} = require('../mongoDriver')

//--------------------------Routes Products--------------------------------------------
router.post('/products', async (req, res) => {

  const collection = 'products'
  const status = await insertOne(collection ,req.body)
  return res.status(201).json({ ...status.ops[0]});
})

router.get('/products', async (req, res) => {

  const collection = 'products'
  const status = await find(collection)
  return res.json(status)
})

router.get('/products/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'products'
  const status = await findOne(collection, id)
  res.json(status)
})

router.put('/products/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'products'
  await updateOne(collection, id, req.body)
  return res.status(200).json(  await findOne(collection, id) );
})


router.delete('/products/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'products'
  const status = await deleteOne(collection, id)
  return res.json(true)
})


//-------------------------Route Categories-------------------------------------------
router.post('/categories', async (req, res) => {

  const collection = 'categories'
  const status = await insertOne(collection ,req.body)
  return res.status(201).json({ ...status.ops[0] });
})

router.get('/categories', async (req, res) => {

  const collection = 'categories'
  const status = await find(collection)
  return res.json(status)
})

router.get('/categories/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'categories'
  const status = await findOne(collection, id)
  res.json(status)
})

router.put('/categories/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'categories'
  await updateOne(collection, id, req.body)
  return res.status(200).json(  await findOne(collection, id) );
})

router.delete('/categories/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'categories'
  const status = await deleteOne(collection, id)
  return res.json(true)
})

router.get('/categories/:id/products', async (req, res) => {

  const { id } = req.params
  const collection = 'products'
  const status = await find(collection, {categoryId: id})
  res.json(status)
})

module.exports = router;

