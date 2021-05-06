const { ObjectId } = require('mongodb')
const dbClient = require('../../db/mongo')
const collection = "categories"
const DB_NAME = process.env.MONGO_DB_NAME

const controller = {
    list: async (req, res) => {
        await dbClient.connect()
        const database = dbClient.db( DB_NAME )
        const categories = database.collection( collection )

        categories.find().toArray( (err, categories) => {
            res.status(200).json(categories)
        } )
    },
    show: async (req, res) => {
        const { categoryId } = req.params

        await dbClient.connect()
        const database = dbClient.db( DB_NAME )
        const categories = database.collection( collection )

        categories.findOne({ _id: ObjectId( categoryId ) }, (err, category) => {
            res.status(200).json(category)
        })
    },
    store: async (req, res) => {
        await dbClient.connect()
        const database = dbClient.db( DB_NAME )
        const categories = database.collection(collection)

        categories.insertOne({ ...req.body }, (err, category) => {
            res.status(201).json(category.ops[0])
        })
    },
    update: async (req, res) => {
        const { categoryId } = req.params

        await dbClient.connect()
        const database = dbClient.db( DB_NAME )
        const categories = database.collection( collection )
        
        categories.updateOne({ _id: ObjectId(categoryId) }, { $set: { ...req.body } })
        categories.findOne( { _id: ObjectId(categoryId) }, (err, category) => {
            res.status(200).json(category)
        } )
    },
    destroy: async (req, res) => {
        const { categoryId } = req.params

        await dbClient.connect()
        const database = dbClient.db( DB_NAME )
        const categories = database.collection( collection )

        categories.deleteOne({ _id: ObjectId(categoryId) }, (err, categories) => {
            if( categories.deletedCount === 1 ){
                res.status(200).json(true)
            }
        })
    },
    listProducts: async (req, res) => {
        const { categoryId } = req.params

        await dbClient.connect()
        const database = dbClient.db( DB_NAME )
        const products = database.collection( "products" )

        products.find({ categoryId: categoryId }).toArray( (err, products) => {
            res.status(200).json(products)
        } )
    }
}

module.exports = controller