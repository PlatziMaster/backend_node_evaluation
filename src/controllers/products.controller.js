const productsCtrl = {}
const Product = require('../models/Product')
const Category = require('../models/Category')

// New Product Form -GET
productsCtrl.renderProductsAdd = async (req, res) => {
    const all_categories = await Category.find().lean()
    res.render('products/new-product', { all_categories })
}

// Create New Product -POST
productsCtrl.createNewProduct = async (req, res) => {
    const {
        name,
        price,
        categoryId,
        description,
        image
    } = req.body

    const newProduct = new Product({
        name,
        price,
        categoryId,
        description,
        image
    })


    await newProduct.save()
    res.redirect('/api/products/')
}

// All Products -GET
productsCtrl.renderAllProducts = async (req, res) => {

    const all_products = await Product.find().lean()
    res.render('products/all-products', { all_products })
}

// View Product -GET
productsCtrl.renderViewProduct = async (req, res) => {
    const product = await Product.findById(req.params.id).lean()
    res.render('products/view-product', { product })
    console.log('Ver producto')
}

// Edit Product Form -POST
productsCtrl.renderEditProduct = async (req, res) => {
    const product = await Product.findById(req.params.id).lean()
    const all_categories = await Category.find().lean()
    res.render('products/edit-product', { product, all_categories })
    console.log(req.params.id)
}

// Update Product -PUT
productsCtrl.updateProduct = async (req, res) => {
    const {
        name,
        price,
        categoryId,
        description,
        image
    } = req.body
    
    await Product.findByIdAndUpdate(req.params.id, {name, price, categoryId, description, image})
    res.redirect('/api/products/')
}

// Delete Product
productsCtrl.deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.redirect('/api/products/')
}

module.exports = productsCtrl