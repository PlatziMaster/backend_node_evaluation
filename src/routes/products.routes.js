import { Router } from 'express'
const router = Router()
import { ObjectID } from 'mongodb'
import { connect } from '../database'


router.get('/', async (req, res) => {
    try{
        const db = await connect();
        const result = await db.collection('products').find({}).toArray()
        res.json(result)
    } catch(e) {
        console.log(`Error is: ${e}`)
    }
})
router.post('/', async (req, res) => {
    try{
        const db = await connect();
        const product = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            categoryId: req.body.categoryId,
            image: req.body.image
        }
        const result = await db.collection('products').insertOne(product)
        res.json(result.ops[0])
    } catch(e) {
        console.log(`Error creating is: ${e}`)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const { id } =  req.params
        const db = await connect();
        const result = await db.collection('products').findOne({ _id: ObjectID(id) })
        if(result === null || '' || false) {
            res.json(`Consult ${id} don't exist`)
        } else {
            res.json(result)
        }  
    } catch(e) {
        console.log(`Error consulting product: ${e}`)
    }
    
})
router.delete('/:id', async (req, res) => {
    try {
        const { id } =  req.params
        const db = await connect();
        const result = await db.collection('products').findOneAndDelete({ _id: ObjectID(id) })
        res.json({
            message:`Product ${id} is delete`,
            result
        })
    } catch(e) {
        console.log(`Error consulting product: ${e}`)
    } 
})
router.put('/:id', async (req, res) => {
    try {
        const { id } =  req.params
        const updateProduct = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            categoryId: req.body.categoryId,
            image: req.body.image
        }
        const db = await connect();
        const result = await db.collection('product').updateOne({ _id: ObjectID(id) }, { $set: updateProduct })
        res.status(200).json({
            message:`Product ${id} is update`,
            result
        })
    } catch(e) {
        res.status(500).json({
            message: e.message || 'Something goes wrong consult!'
        })
        console.log(`Error consulting product: ${e}`)
    } 
})

export default router