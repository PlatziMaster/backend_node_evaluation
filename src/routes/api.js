const express = require('express');
const router = express.Router();
const {find, findOne, insertOne, updateOne, deleteOne} = require('../mongoDriver')

//--------------------------Routes Products--------------------------------------------
router.post('/products', async (req, res) => {

  const collection = 'products'
  try{
    const status = await insertOne(collection ,req.body)
    return res.status(201).json({ ...status.ops[0]});
  }catch{
    return res.status(400)
  }
})

router.get('/products', async (req, res) => {

  const collection = 'products'
  try{
    const status = await find(collection)
    return res.json(status)
  }catch{
    return res.status(400)
  }
})

router.get('/products/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'products'
  try{
    const status = await findOne(collection, id)
    res.json(status)
  }catch{
    return res.status(400)
  }
})

router.put('/products/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'products'
  try{
    await updateOne(collection, id, req.body)
    return res.status(200).json(await findOne(collection, id) );
  }catch{
    return res.status(400)
  }
})


router.delete('/products/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'products'
  try{
    await deleteOne(collection, id)
    return res.json(true)
  }catch{
    return res.status(400)
  }
})


//-------------------------Route Categories-------------------------------------------
router.post('/categories', async (req, res) => {

  const collection = 'categories'
  try{
    const status = await insertOne(collection ,req.body)
    return res.status(201).json({ ...status.ops[0]});
  }catch{
    return res.status(400)
  }
})

router.get('/categories', async (req, res) => {

  const collection = 'categories'
  try{
    const status = await find(collection)
    return res.json(status)
  }catch{
    return res.status(400)
  }
})

router.get('/categories/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'categories'
  try{
    const status = await findOne(collection, id)
    res.json(status)
  }catch{
    return res.status(400)
  }
})

router.put('/categories/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'categories'
  try{
    await updateOne(collection, id, req.body)
    return res.status(200).json(await findOne(collection, id) );
  }catch{
    return res.status(400)
  }
})


router.delete('/categories/:id', async (req, res) => {

  const { id } = req.params
  const collection = 'categories'
  try{
    await deleteOne(collection, id)
    return res.json(true)
  }catch{
    return res.status(400)
  }
})


router.get('/categories/:id/products', async (req, res) => {

  const { id } = req.params
  const collection = 'products'
  try{
    const status = await find(collection, {categoryId: id})
    res.json(status)
  }catch{
    return res.status(400)
  }
})

module.exports = router;

