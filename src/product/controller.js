const db = require("../db");

async function getAll(req, res) {
  const result = await db.Product.find({})
  res.status(200).json(result)
}

async function getOne({ params: { id } }, res) {
  const result = await db.Product.findById(id)
  res.status(200).json(result)
}

async function create({ body: { name, price, description, categoryId, image } }, res) {
  const newProduct = {
    name, price, description, categoryId, image
  }
  const result = await db.Product.create(newProduct)
  res.status(201).json(result)
}

async function edit({ params: { id }, body }, res) {
  const product = await db.Product.findById(id)
  Object.assign(product, body)
  const result = await product.save()
  res.status(200).json(result)
}

async function deleteOne({ params: { id } }, res) {
  const result = await db.Product.findByIdAndDelete(id)
  if (result) {
    res.status(200).send(true)
  } else {
    res.status(400).send(false)
  }
}

async function productsByCategory({ params: { id } }, res) {
  const products = await db.Product.find({ categoryId: id })
  res.status(200).json(products)
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  deleteOne,
  productsByCategory
}