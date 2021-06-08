const categoriesCtrl = {}
const Category = require('../models/Category')
const Product = require('../models/Product')



// All Categories -GET
categoriesCtrl.renderAllCategories = async (req, res) => {
    const all_categories = await Category.find().lean()
    res.render('categories/all-categories', { all_categories })
}

// All Categories -GET -API
categoriesCtrl.apiRenderAllCategories = async (req, res) => {
    const all_categories = await Category.find().lean()
    res.json(all_categories)
}

// View Category -GET
categoriesCtrl.renderViewCategory = async (req, res) => {
    const category = await Category.findById(req.params.id).lean()
    res.render('categories/view-category', { category })
}
// View Category -GET -API
categoriesCtrl.apiRenderViewCategory = async (req, res) => {
    const category = await Category.findById(req.params.id).lean()
    res.json(category)
}

// New Category Form -GET
categoriesCtrl.renderCategoriesAdd = (req, res) => {
    res.render('categories/new-category')
}

// Create New Category -POST
categoriesCtrl.createNewCategory = async (req, res) => {
    const { name, image } = req.body
    const nameCategory = await Category.findOne({ name: name })
    if (nameCategory) {
        console.log('Ya está en uso')
        res.redirect('/categories/new')
    } else {
        const newCategory = new Category({ name, image })
        await newCategory.save()
        console.log(newCategory.id)
        res.redirect('/categories/')
    }
}
// Create New Category -POST -API
categoriesCtrl.apiCreateNewCategory = async (req, res) => {
    const { name, image } = req.body
    const nameCategory = await Category.findOne({ name: name })
    if (nameCategory) {
        res.send('Ya está en uso')
    } else {
        const newCategory = new Category({ name, image })
        await newCategory.save()
        res.json(newCategory)
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
    await Category.findByIdAndUpdate(req.params.id, { name, image })
    res.redirect('/categories/')
}
// Update Category -PUT -API
categoriesCtrl.apiUpdateCategory = async (req, res) => {
    const {
        name,
        image
    } = req.body
    await Category.findByIdAndUpdate(req.params.id, { name, image })
    res.send('Edited')
}

// Delete Category -DELETE
categoriesCtrl.deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    res.redirect('/categories/')
}
// Delete Category -DELETE -API
categoriesCtrl.apiDeleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    res.send('DELETED')
}

// All Products For Category -GET
categoriesCtrl.allProductsForCategory = async (req, res) => {
    const proForCat = await Product.find({ categoryId: req.params.id }).lean()
    await res.render('categories/products-for-categories', { proForCat })
}
// All Products For Category -GET -API
categoriesCtrl.apiAllProductsForCategory = async (req, res) => {
    const proForCat = await Product.find({ categoryId: req.params.id }).lean()
    await res.json(proForCat)
}

module.exports = categoriesCtrl
