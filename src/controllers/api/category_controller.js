//Declaration of variables
const { object_id } = require('mongodb')
const mongo_client = require('../../db/mongo')
const collection = "categories"
const collection_products = "products"
const db_name = process.env.MONGO_DB_NAME

//Controller settings
const controller = {
    list: async (req, res) => {
        await mongo_client.connect()
        const database = mongo_client.db( db_name )
        const categories = database.collection( collection )

        categories.find().toArray( (err, categories) => {
            res.status(200).json(categories)
        } )
    },
    show: async (req, res) => {
        const { category_id } = reg.params
        await mongo_client.connect()
        const database = mongo_client.db( db_name )
        const categories = database.collection( collection )

        categories.findOne({ _id: object_id( category_id ) }, (err, category) => {
            res.status(200).json(category)
        })
    },
    store: async (req, res) => {
        await mongo_client.connect()
        const database = mongo_client.db( db_name )
        const categories = database.collection( collection )

        categories.insertOne({ ...req.body }, (err, category) => {
            res.status(201).json(category.ops[0])
        })
    },
    update: async (req, res) => {
        const { category_id } = req.params
        await mongo_client.connect()
        const database = mongo_client.db( db_name )
        const categories = database.collection( collection )

        categories.updateOne({ _id: object_id(category_id) }, { $set: { ...req.body } })
        categories.findOne({ _id: object_id( category_id ) }, (err, category) => {
            res.status(200).json(category)
        })
    },
    destroy: async (req, res) => {
        const { category_id } = req.params
        await mongo_client.connect()
        const database = mongo_client.db( db_name )
        const categories = database.collection( collection )

        categories.deleteOne({ _id: object_id(category_id) }, (err, categories) => {
            if( categories.deletedCount === 1 ){
                res.status(200).json(true)
            }
        })
    },
    list_products: async (req, res) => {
        const { category_id } = req.params
        await mongo_client.connect()
        const database = mongo_client.db( db_name )
        const products = database.collection( collection_products )

        products.find({ category_id: category_id }).toArray( (err, products) => {
            res.status(200).json(products)
        })
    }
}

module.exports = controller