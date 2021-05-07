const Mongo = require('../db/mongo')
const db = new Mongo()
const collection = 'categories'
const { ObjectId } = require('mongodb')
const getCategories = async function () {
  const categories = await db.getAll(collection, '')
  return categories
}

const getCategory = async function (id) {
  const category = await db.get(collection, id)
  return category
}

const postCategory = async function (data) {
  const category = await db.create(collection, data)
  return category
}

const patchCategory = async function (id, data) {
  const category = await db.update(collection, id, data)
  return category
}

const deleteCategory = async function (id) {
  const deletedCategory = await db.delete(collection, id)
  return deletedCategory
}

const productsCategory = async function (id) {
  const products = await db.getAll('products', { categoryId: id})
  return products
}
module.exports = { getCategories, postCategory, getCategory, patchCategory, deleteCategory, productsCategory } 