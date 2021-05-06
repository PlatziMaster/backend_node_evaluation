const Product = require('../entities/product');

const productController = {};

productController.getProducts = async (req,res) => {
    const products = await Product.find();
    res.json(products);
}

productController.createProduct = async (req,res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId,
        image: req.body.image
    });
    await product.save();
    res.json({'status' : 'product created'});
}

productController.getProduct = async (req,res) => {
    
    const product = await Product.findById(req.params.id);
    res.json(product);
}

productController.editProduct = async (req,res) => {
    const {id} = req.params;
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId,
        image: req.body.image
    }
    await Product.findByIdAndUpdate(id, {$set: product}, {new: true});

    res.json({'status': 'product updated'});
}

productController.deleteProduct = async (req,res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json({'status': 'product removed'});
}

module.exports = productController;