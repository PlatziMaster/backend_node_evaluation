const Router = require('express');
const CategoryService = require('../../services/category')

const route = Router();

const categoryRouter =  (app) => {
    app.use('/categories', route);

    route.post('/',
        async (req, res, next) => {
            try {
                const categoryDTO = req.body;
                const category  = await CategoryService.postCategory(categoryDTO)

                return res.status(201).json(category);
            } catch (e) {
                return next(e);
            }
        },
    );

    route.get('/',
        async (req, res, next) => {
            try {
                const categories  = await CategoryService.getAll()

                return res.json(categories);
            } catch (e) {
                return next(e);
            }
        },
    );

    route.get('/:id',
        async (req, res, next) => {
            try {
                const category = await CategoryService.getById(req.params.id)

                return res.json(category);
            } catch (e) {
                return next(e);
            }
        },
    );

    route.put('/:id',
        async (req, res, next) => {
            try {
                const categoryDTO = req.body;
                const category  = await CategoryService.putCategory(req.params.id, categoryDTO)

                return res.json(category);
            } catch (e) {
                return next(e);
            }
        },
    );


    route.delete('/:id',
        async (req, res, next) => {
            try {
                const category  = await CategoryService.deleteById(req.params.id)

                return res.json(category);
            } catch (e) {
                return next(e);
            }
        },
    );

    route.get('/:id/products',
        async (req, res, next) => {
            try {
                const category = await CategoryService.getCategoryProductsById(req.params.id)

                return res.json(category);
            } catch (e) {
                return next(e);
            }
        },
    );
}

module.exports = categoryRouter
