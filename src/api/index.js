const express = require("express");
const Categories = require("../services/categories");
const Products = require("../services/products");
const validationHandler = require("../middleware/validationHandler");
const {
    categoryCreateSchema,
    categoryUpdateSchema,
    productCreateSchema,
    idSchema,
} = require("../schemas");

const categories = new Categories();
const products = new Products();

/**
 * The categories api routes
 * @param {*} app
 */
const categoriesRoutes = (app) => {
    const router = express.Router();

    app.use("/api/categories", router);

    router.get("/", async (req, res, next) => {
        try {
            const data = await categories.all();
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    });
    router.get(
        "/:categoryId",
        validationHandler({ categoryId: idSchema }, "params"),
        async (req, res, next) => {
            try {
                const { categoryId } = req.params;
                const category = await categories.find(categoryId);
                if (category) {
                    res.status(200).json(category);
                } else {
                    res.status(404).json({ message: "Not found" });
                }
            } catch (err) {
                next(err);
            }
        }
    );
    router.get(
        "/:categoryId/products",
        validationHandler({ categoryId: idSchema }, "params"),
        async (req, res, next) => {
            try {
                const { categoryId } = req.params;
                const data = (await products.all(categoryId)) || [];
                res.status(200).json(data);
            } catch (err) {
                next(err);
            }
        }
    );
    router.post(
        "/",
        validationHandler(categoryCreateSchema),
        async (req, res, next) => {
            try {
                const { body: category } = req;
                const insertedDocument = await categories.create({ category });
                res.status(201).json(insertedDocument);
            } catch (err) {
                next(err);
            }
        }
    );

    router.put(
        "/:categoryId",
        validationHandler({ categoryId: idSchema }, "params"),
        validationHandler(categoryUpdateSchema),
        async (req, res, next) => {
            try {
                const { body: category } = req;
                const { categoryId } = req.params;
                const data = await categories.update({ categoryId, category });
                res.status(200).json(data);
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        "/:categoryId",
        validationHandler({ categoryId: idSchema }, "params"),
        async (req, res, next) => {
            try {
                const { categoryId } = req.params;
                await categories.destroy(categoryId);
                res.status(200).json(true);
            } catch (err) {
                next(err);
            }
        }
    );
};

/**
 * The products api routes
 * @param {*} app
 */
const productsRoutes = (app) => {
    const router = express.Router();

    app.use("/api/products", router);

    router.get("/", async (req, res, next) => {
        try {
            const data = await products.all();
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    });
    router.get(
        "/:productId",
        validationHandler({ productId: idSchema }, "params"),
        async (req, res, next) => {
            try {
                const { productId } = req.params;
                const product = await products.find(productId);
                if (product) {
                    res.status(200).json(product);
                } else {
                    res.status(404).json({ message: "Not found" });
                }
            } catch (err) {
                next(err);
            }
        }
    );
    router.post(
        "/",
        validationHandler(productCreateSchema),
        async (req, res, next) => {
            try {
                const { body: product } = req;
                const insertedDocument = await products.create({ product });
                res.status(201).json(insertedDocument);
            } catch (err) {
                next(err);
            }
        }
    );

    router.put(
        "/:productId",
        validationHandler({ productId: idSchema }, "params"),
        async (req, res, next) => {
            try {
                const { body: product } = req;
                const { productId } = req.params;
                const updatedDocument = await products.update({
                    productId,
                    product,
                });

                res.status(200).json(updatedDocument);
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        "/:productId",
        validationHandler({ productId: idSchema }, "params"),
        async (req, res, next) => {
            try {
                const { productId } = req.params;
                await products.destroy(productId);
                res.status(200).json(true);
            } catch (err) {
                next(err);
            }
        }
    );
};

module.exports = { categoriesRoutes, productsRoutes };
