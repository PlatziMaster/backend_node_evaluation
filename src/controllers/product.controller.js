const createError = require('http-errors');
const { Mongoose } = require('mongoose');

const Product = require("../models/product.model");

module.exports = {
    getAllProducts : async (req,res,next) => {
        try{
            const results = await Product.find({},{__v: 0 });
            res.send(results);
        }catch(error){
            console.log(error.message);
        }
    },

    findProductById : async (req,res,next)=> {
        const id = req.params.id;
        try {
            const product = await Product.findById(id);
            if(!product){
                throw createError(404,"Product doesn't exist");
            }
            res.send(product);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },

    createNewProduct: async (req,res,next)=> {
        try{
            const product = new Product(req.body);
            const result  = await product.save();
            res.status(201).send(result);
        }catch(error){
            console.log(error);
        }
    },

    updateProduct: async (req,res,next)=> {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}
            const result = await Product.findByIdAndUpdate(id, update, options);
            res.send(result);
        } catch (error) {
           console.log(error);
        }
    },

    deleteProduct: async (req,res,next)=> {
        const id = req.params.id;
        try {
            const result = await Product.findByIdAndDelete(id);
            res.status(200).send(true);
        } catch (error) {
           console.log(error);
        }
    }
};