const productCtrl = {}
const connection = require('../database')
const {ObjectID} = require('mongodb')


productCtrl.getAllProduct = async (req, res) => {
    const db = await connection();
    const products = await db.collection('products').find({}).toArray();
    res.json(products);
}

productCtrl.getProduct = async (req, res) => {
    const { id } = req.params;
    const db = await connection();
    const product = await db.collection('products').findOne({ _id: ObjectID(id) });
    res.json(product);
}

productCtrl.createNewProduct = async (req, res) => {
    const db = await connection();
    const { name, price, description, categoryId, image } = req.body
    const newProduct = await db.collection('products').insert({ name, price, description, categoryId, image });
    res.json(newProduct);
}

productCtrl.editProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, categoryId, image } = req.body
    const db = await connection();
    const updatedProduct = await db.collection('products').updateOne({ _id: ObjectID(id) }, {$set: { name, price, description, categoryId, image } });
    res.json({message: 'product updated'});
}

productCtrl.deleteProduct = async (req, res) => {
    const { id } = req.params;
    const db = await connection();
    const deletedProduct = await db.collection('products').remove({ _id: ObjectID(id) });
    res.json({message: res.send('product deleted')});       
}

module.exports = productCtrl