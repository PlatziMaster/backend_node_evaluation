//Declaration of variables
const { object_id } = require('mongodb')
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
        const { product_id } = req.params
        await mongo_client.connect()
        database = mongo_client.db(db_name)
        const products = database.collection(collection)

        const product = await products.findOne({_id: object_id(product_id)})

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
        const { product_id } = req.params
        await mongo_client.connect()
        database = mongo_client.db(db_name)
        const products = database.collection(collection)

        await products.updateOne({_id: object_id(product_id)},{$set:{...req.body}})
        products.findOne({_id: object_id(product_id)}, (err, product) => {
            res.status(200).json(product)
        })
    },
    destroy: async (req, res) => {
        const { product_id } = req.params
        await mongo_client.connect()
        database = mongo_client.db(db_name)
        const products = database.collection(collection)

        products.deleteOne({ _id: object_id(product_id) }, (err, deleted) => {
            if(deleted.deletedCount === 1){
                res.status(200).json(true)
            }
        })
    }
}

module.exports = controller