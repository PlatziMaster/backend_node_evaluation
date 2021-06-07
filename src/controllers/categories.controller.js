const categoriesCtrl = {}
const Category = require('../models/Category')
const Product = require('../models/Product')



// All Categories -GET
categoriesCtrl.renderAllCategories = async (req, res) => {
    const all_categories = await Category.find().lean()
    res.render('categories/all-categories', { all_categories })
    //console.log('All Categories')
    //res.send('All Categories')
}

// View Category -GET
categoriesCtrl.renderViewCategory = async (req, res) => {
    const category = await Category.findById(req.params.id).lean()
    res.render('categories/view-category', { category })
}

// New Category Form -GET
categoriesCtrl.renderCategoriesAdd = (req, res) => {
    res.render('categories/new-category')
    //console.log('New Category')
}

// Create New Category -POST
categoriesCtrl.createNewCategory = async (req, res) => {
    const { name, image } = req.body
    const nameCategory = await Category.findOne({ name: name })
    if (nameCategory) {
        console.log('Ya está en uso')
        res.redirect('/api/categories/new')
    } else {
        const newCategory = new Category({ name, image })
        await newCategory.save()
        console.log(newCategory.id)
        res.redirect('/api/categories/')
    }
}

// Edit Category Form -GET
categoriesCtrl.renderEditCategory = async (req, res) => {
    const category = await Category.findById(req.params.id).lean()
    res.render('categories/edit-category', { category })
}

// Update Category -PUT
categoriesCtrl.updateCategory = async (req, res) => {
    const {
        name,
        image
    } = req.body
    await Category.findByIdAndUpdate(req.params.id, {name, image})
    res.redirect('/api/categories/')
}

// Delete Category -DELETE
categoriesCtrl.deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    res.redirect('/api/categories/')
}

// All Products For Category -GET
categoriesCtrl.allProductsForCategory = async (req, res) => {
    const proForCat = await Product.find({categoryId: req.params.id}).lean()
    console.log(proForCat)
    await res.render('categories/products-for-categories', { proForCat })
}

module.exports = categoriesCtrl
