const { ObjectId } = require('bson')
const Mongo = require('../db/mongo')
const db = new Mongo()
const collection = 'products'


const getProducts = async function () {
  const products = await db.getAll(collection, '')
  return products
}

const getProduct = async function (id) {
  const product = await db.get(collection, id)
  return product
}

const postProduct = async function (data) {
  const products = await db.create(collection, data)
  return products
}

const patchProduct = async function (id, data) {
  const products = await db.update(collection, id, data)
  return products
}

const deleteProduct = async function (id) {
  const deletedProduct = await db.delete(collection, id)
  return deletedProduct
}
module.exports = { getProducts, postProduct, getProduct, patchProduct, deleteProduct }