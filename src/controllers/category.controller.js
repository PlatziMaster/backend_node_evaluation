import Category from '../models/category.model'
import mongoose from 'mongoose'
import { connect } from '../database'

exports.newCategory = async ( req, res, next) => {
    const category = new Category(req.body)
    connect()    
    try {
        await category.db.save().then(result => {
            res.status(200).json({
                message: 'Category save correctly',
            })
            mongoose.connection.close()
        })
        return result
    } catch(e) {
        console.log(`Error de: ${e}`)
        next()
    }
}