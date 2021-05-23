const createError = require('http-errors');
const { Mongoose } = require('mongoose');

const Category = require("../models/category.model");
const Product = require("../models/product.model");

module.exports = {
    getAllCategories : async (req,res,next) => {
        try{
            const results = await Category.find({},{__v: 0 });
            res.send(results);
        }catch(error){
            console.log(error.message);
        }
    },

    findCategoryById : async (req,res,next)=> {
        const id = req.params.id;
        try {
            const category = await Category.findById(id);
            if(!category){
                throw createError(404,"Category doesn't exist");
            }
            res.send(category);
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },

    createNewCategory: async (req,res,next)=> {
        try{
            const category = new Category(req.body);
            const result  = await category.save();
            res.status(201).send(result);
        }catch(error){
            console.log(error);
        }
    },

    updateCategory: async (req,res,next)=> {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}
            const result = await Category.findByIdAndUpdate(id, update, options);
            res.send(result);
        } catch (error) {
           console.log(error);
        }
    },

    deleteCategory: async (req,res,next)=> {
        const id = req.params.id;
        try {
            const result = await Category.findByIdAndDelete(id);
            res.status(200).send(true);
        } catch (error) {
           console.log(error);
        }
    },

    getProductsByCategoryId: async (req,res,next) => {
        const id = req.params.id;
        try{
            const results = await Product.find({categoryId: id },{__v:0});
            res.send(results);
        }catch(error){
            console.log(error.message);
        }
    }
};