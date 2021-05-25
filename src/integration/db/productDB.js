const client = require('../index')
const config = require('../../config')
const ObjectID = require('mongodb').ObjectID
const nameCollection = 'products'

module.exports = () => ({

    postProduct: (data) => new Promise(async (resolve, reject) => {
        try {
            const database = client.db(config.dbName);
            const collection = database.collection(nameCollection);

            const result = await collection.insertOne(data);
            resolve(result.ops[0])
        } catch (e) {
            reject(e)
        }
    }),

    getAllProducts: () => new Promise(async (resolve, reject) => {
        try {
            const database = client.db(config.dbName);
            const collection = database.collection(nameCollection);

            const result = await collection.find();
            resolve(await result.toArray())
        } catch (e) {
            reject(e)
        }
    }),

    getProductById: (categoryId) => new Promise(async (resolve, reject) => {
        try {
            const database = client.db(config.dbName);
            const collection = database.collection(nameCollection);

            const query = { _id: ObjectID(categoryId) };
            const result = await collection.findOne(query);
            resolve(result)
        } catch (e) {
            reject(e)
        }
    }),

    putProduct: (categoryId, fieldsToUpdate) => new Promise(async (resolve, reject) => {
        try {
            const database = client.db(config.dbName);
            const collection = database.collection(nameCollection);

            const filter = { _id: ObjectID(categoryId) };
            const result = await collection.findOneAndUpdate(filter, fieldsToUpdate, { returnOriginal: false })
            resolve(result.value)
        } catch (e) {
            reject(e)
        }
    }),

    deleteProductById: (categoryId) => new Promise(async (resolve, reject) => {
        try {
            const database = client.db(config.dbName);
            const collection = database.collection(nameCollection);

            const query = { _id: ObjectID(categoryId) };
            const result = await collection.deleteOne(query);
            if (result.deletedCount === 1) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    }),
})

