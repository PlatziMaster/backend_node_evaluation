const db = require("../db");

async function getAll(req, res) {
  const result = await db.Category.find({})
  res.status(200).json(result)
}

async function getOne({ params: { id } }, res) {
  const result = await db.Category.findById(id)
  res.status(200).json(result)
}

async function create({ body: { name, image } }, res) {
  const newCategory = {
    name, image
  }
  const result = await db.Category.create(newCategory)
  res.status(201).json(result)
}

async function edit({ params: { id }, body }, res) {
  const category = await db.Category.findById(id)
  Object.assign(category, body)
  const result = await category.save()
  res.status(200).json(result)
}

async function deleteOne({ params: { id } }, res) {
  const result = await db.Category.findByIdAndDelete(id)
  if (result) {
    res.status(200).send(true)  
  } else {
    res.status(400).send(false)
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  deleteOne
}