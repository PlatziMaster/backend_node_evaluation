const Category = require('../entities/category');
const Product = require('../entities/product');

const categoryController = {};

categoryController.getCategories = async (req,res) => {
    const categories = await Category.find();
    res.json(categories);
}

categoryController.createCategory = async (req,res) => {
    console.log(req.body)
    const category = new Category({
        name: req.body.name,
        image: req.body.image
    });
    await category.save();
    res.json({'status' : 'category created'});
}

categoryController.getCategory = async (req,res) => {
    
    const category = await Category.findById(req.params.id);
    res.json(category);
}

categoryController.getProductsByCategory = async (req, res) =>{

    const products = await Product.find({"categoryId" : req.params.id});
    res.json(products); 

}

categoryController.editCategory = async (req,res) => {
    const {id} = req.params;
    const category = {
        name: req.body.name,
        image: req.body.image
    }
    await Category.findByIdAndUpdate(id, {$set: category}, {new: true});

    res.json({'status': 'category updated'});
}

categoryController.deleteCategory = async (req,res) => {
    await Category.findByIdAndRemove(req.params.id);
    res.json({'status': 'category removed'});
}

module.exports = categoryController;