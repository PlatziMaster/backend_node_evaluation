const Router = require('express');
const ProductService = require('../../services/product')

const route = Router();

const productRouter =  (app) => {
    app.use('/products', route);

    route.post(
        '/',
        async (req, res, next) => {
            try {
                const productDTO = req.body;
                const product  = await ProductService.postProduct(productDTO)

                return res.status(201).json(product);
            } catch (e) {
                return next(e);
            }
        },
    );

    route.get(
        '/',
        async (req, res, next) => {
            try {

                const products  = await ProductService.getAll()

                return res.json(products);
            } catch (e) {
                return next(e);
            }
        },
    );

    route.get(
        '/:id',
        async (req, res, next) => {
            try {

                const product  = await ProductService.getById(req.params.id)

                return res.json(product );
            } catch (e) {
                return next(e);
            }
        },
    );

    route.put(
        '/:id',
        async (req, res, next) => {
            try {
                const productDTO = req.body;
                const product  = await ProductService.putProduct(req.params.id, productDTO)

                return res.json(product);
            } catch (e) {
                return next(e);
            }
        },
    );


    route.delete(
        '/:id',
        async (req, res, next) => {
            try {
                const product  = await ProductService.deleteById(req.params.id)
                return res.json(product);
            } catch (e) {
                return next(e);
            }
        },
    );
}

module.exports = productRouter
