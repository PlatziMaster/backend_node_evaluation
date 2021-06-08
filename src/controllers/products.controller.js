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
    res.redirect('/products/')
}

// Create New Product -POST -API
productsCtrl.apiCreateNewProduct = async (req, res) => {

    const {
        name,
        price,
        description,
        image
    } = req.body

    const categoryId = req.body.categoryId ? req.body.categoryId : "sincategoria"

    if (name && price) {

        const newProduct = new Product({
            name,
            price,
            categoryId,
            description,
            image
        })
        await newProduct.save()
        res.json(newProduct)
    } else {
        res.send('Wrong Request')
    }
}


// All Products -GET
productsCtrl.renderAllProducts = async (req, res) => {

    const all_products = await Product.find().lean()
    res.render('products/all-products', { all_products })
    //res.json(all_products)
}

// All Products -GET -API
productsCtrl.apiRenderAllProducts = async (req, res) => {
    const all_products = await Product.find().lean()
    res.json(all_products)
}

// View Product -GET
productsCtrl.renderViewProduct = async (req, res) => {
    const product = await Product.findById(req.params.id).lean()
    res.render('products/view-product', { product })
    console.log('Ver producto')
}

// View Product -GET -API
productsCtrl.apiRenderViewProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
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

    await Product.findByIdAndUpdate(req.params.id, { name, price, categoryId, description, image })
    res.redirect('/products/')
}

// Update Product -PUT -API
productsCtrl.apiUpdateProduct = async (req, res) => {
    const {
        name,
        price,
        description,
        image
    } = req.body

    const categoryId = req.body.categoryId ? req.body.categoryId : "sincategoria"

    await Product.findByIdAndUpdate(req.params.id, { name, price, categoryId, description, image })
    res.send('Editado')
}

// Delete Product
productsCtrl.deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.redirect('/products/')
}

// Delete Product - API
productsCtrl.apiDeleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.send('DELETE')
}

module.exports = productsCtrl