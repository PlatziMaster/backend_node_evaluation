const express = require('express');
const ProductService = require('../services/products.js')

function productsApi(app){
    const router = express.Router();
    app.use("/api/products",router)
    const productService = new ProductService()

    router.get("/", async function(req,res,next){
        try {
            const products = await productService.getProducts()
            res.status(200).json(
                products,
            )

        } catch (error) {
            next(error);
        }
    })

    router.get("/:id", async function(req,res,next){
        const { id } = req.params
        try {
            const  {_id, name, price, categoryId} = await productService.getProduct({ id })
            res.status(200).json({
                _id: _id,
                name: name,
                price: price,
                categoryId: categoryId,
            })

        } catch (error) {
            next(error);
        }
    })

    router.post("/", async function(req,res,next){
        const { body: product } = req;
        try {
            const {_id, name, price}  = await productService.createProduct({product})
            res.status(201).json({
                _id: _id,
                name: name,
                price: price,
            })

        } catch (error) {
            next(error);
        }
    })

    router.put("/:id", async function(req,res,next){
        const { id } = req.params
        const { body: product } = req;
        try {
            const {_id, name, price} = await productService.updateProduct({ id, product })
            res.status(200).json({
                _id: _id,
                name: name,
                price: price,
            })

        } catch (error) {
            next(error);
        }
    })

    router.delete("/:id", async function(req,res,next){
        const { id } = req.params
        try {
            const data = await productService.deleteProduct({ id })
            res.status(200).json(
                data,
            )

        } catch (error) {
            next(error);
        }
    })
}

module.exports = productsApi;