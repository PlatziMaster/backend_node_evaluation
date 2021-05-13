const express = require("express");
const Category = require("../services/categories");
const validationHandler = require("../middleware/validationHandler");
const {
    categoryCreateSchema,
    categoryUpdateSchema,
    idSchema,
} = require("../schemas");

const categories = new Category();

const categoriesRoutes = (app) => {
    const router = express.Router();

    app.use("/api/categories", router);

    router.get("/", async (req, res, next) => {
        try {
            const data = await categories.all();
            res.status(200).json({ data });
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
                    res.status(200).json({ data: category });
                }
                res.status(404).json({ message: "Not found" });
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
                const insertedId = await categories.create({ category });
                res.status(201).json({ status: "success", insertedId });
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
                res.status(200).json({ status: "success", data });
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
                res.status(200).json({ status: "success" });
            } catch (err) {
                next(err);
            }
        }
    );
};

module.exports = { categoriesRoutes };
