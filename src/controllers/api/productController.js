const { ObjectId } = require('mongodb')
const dbClient = require('../../db/mongo')
const collection = "products"
const DB_NAME = process.env.MONGO_DB_NAME

const controller = {
    list: (req, res) => {
        res.status(200).json({
            data: 'productos'
        })
    },
    show: (req, res) => {
        const { productId } = req.params

        res.status(200).json({
            data: 'producto'
        })
    },
    store: async (req, res) => {

        await dbClient.connect()
        database = dbClient.db(DB_NAME)
        const products = database.collection(collection)
        products.insertOne({ ...req.body }, (err, product) => {
            res.status(201).json(product.ops[0])
        })
        
    },
    update: (req, res) => {
        const { productId } = req.params

        res.status(200).json({
            data: 'actualizo prod'
        })
    },
    destroy: (req, res) => {
        const { productId } = req.params

        res.status(200).json({
            data: 'elimino prod'
        })
    }
}

module.exports = controller