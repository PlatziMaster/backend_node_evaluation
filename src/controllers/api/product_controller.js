//Declaration of variables
const { ObjectId } = require('mongodb')
const mongo_client = require('../../db/mongo')
const collection = "products"
const db_name = process.env.MONGO_DB_NAME

//Controller settings
const controller = {
    list: async (req, res) => {
        await mongo_client.connect()
        database = mongo_client.db(db_name)
        const products = database.collection(collection)
        
        products.find().toArray((err, products ) => {
            res.status(200).json(products)
        })
    },
    show: async (req, res) => {
        const { productId } = req.params
        await mongo_client.connect()
        database = mongo_client.db(db_name)
        const products = database.collection(collection)

        const product = await products.findOne({_id: ObjectId(productId)})

        res.status(200).json(product)
    },
    store: async (req, res) => {
        await mongo_client.connect()
        database = mongo_client.db(db_name)
        const products = database.collection(collection)
        
        products.insertOne({ ...req.body }, (err, product) => {
            res.status(201).json(product.ops[0])
        })
    },
    update: async (req, res) => {
        const { productId } = req.params
        await mongo_client.connect()
        database = mongo_client.db(db_name)
        const products = database.collection(collection)

        await products.updateOne({_id: ObjectId(productId)},{$set:{...req.body}})
        products.findOne({_id: ObjectId(productId)}, (err, product) => {
            res.status(200).json(product)
        })
    },
    destroy: async (req, res) => {
        const { productId } = req.params
        await mongo_client.connect()
        database = mongo_client.db(db_name)
        const products = database.collection(collection)

        products.deleteOne({ _id: ObjectId(productId) }, (err, deleted) => {
            if(deleted.deletedCount === 1){
                res.status(200).json(true)
            }
        })
    }
}

module.exports = controller