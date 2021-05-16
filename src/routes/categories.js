const express = require('express');
const CategoryService = require('../services/categories.js')

function categoriesApi(app){
    const router = express.Router();
    app.use("/api/categories",router)
    const categoryService = new CategoryService()

    router.get("/", async function(req,res,next){
        try {
            const categories = await categoryService.getCategories()
            res.status(200).json(
                categories,
            )

        } catch (error) {
            next(error);
        }
    })

    router.get("/:id", async function(req,res,next){
        const { id } = req.params
        try {
            const {_id, name, image} = await categoryService.getCategory({ id })
            res.status(200).json({
                _id: _id,
                name: name,
                image: image
            })

        } catch (error) {
            next(error);
        }
    })

    router.post("/", async function(req,res,next){
        const { body: category } = req;
        try {
            const {_id, name, image} = await categoryService.createCategory({category})
            res.status(201).json({
                _id: _id,
                name: name,
                image: image
            })

        } catch (error) {
            next(error);
        }
    })

    router.put("/:id", async function(req,res,next){
        const { id } = req.params
        const { body: category } = req;
        try {
            const {_id, name, image} = await categoryService.updateCategory({ id, category })
            res.status(200).json({
                _id: _id,
                name: name,
                image: image
            })

        } catch (error) {
            next(error);
        }
    })

    router.delete("/:id", async function(req,res,next){
        const { id } = req.params
        try {
            const data = await categoryService.deleteCategory({ id })
            res.status(200).json(
                data,
            )

        } catch (error) {
            next(error);
        }
    })
}

module.exports = categoriesApi;