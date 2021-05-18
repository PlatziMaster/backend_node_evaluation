const express = require("express");
const router = express.Router();

const product = require("../models/product");
const category = require("../models/category");
const { findById } = require("../models/product");

router.get("/", async (req, res) => {
    const products = await product.find();
    const categories = await category.find();
    res.render("index", {
        products: products,
        categories: categories
    })
});

router.post("/add", async (req, res) => {
    const Product = new product(req.body);
    await Product.save();
    res.redirect("/");
});

router.post("/addd", async (req, res) => {
    const Category = new category(req.body);
    await Category.save();
    res.redirect("/");
});

router.get("/delete/:id", async (req, res) =>{
    const {id} = req.params;
    await product.remove({_id: id});
    await category.remove({_id: id});
    res.redirect("/");
});

router.get("/edit/:id", async (req, res) =>{
    const {id} = req.params;
    const productt = await product.findById(id);
    res.render("edit", {
        productt
    });
});

router.get("/editt/:id", async (req, res) =>{
    const {id} = req.params;
    const categori = await category.findById(id);
    res.render("editt", {
        categori
    });
});

router.post("/edit/:id", async (req, res) =>{
    const {id} = req.params;
    await product.updateMany({_id: id}, req.body);
    res.redirect("/");
});

router.post("/editt/:id", async (req, res) =>{
    const {id} = req.params;
    await category.updateMany({_id: id}, req.body);
    res.redirect("/");
});

module.exports = router;