const categoryCtrl = {}
const connection = require('../database')
const {ObjectID} = require('mongodb')

categoryCtrl.getAllCategories = async (req, res) => {
    const db = await connection();
    const categories = await db.collection('categories').find({}).toArray();
    res.json(categories);
}

categoryCtrl.getCategory= async (req, res) => {
    const { id } = req.params;
    const db = await connection();
    const category = await db.collection('categories').findOne({ _id: ObjectID(id) });
    res.json(category);
}

categoryCtrl.createNewCategory = async (req, res) => {
    const db = await connection();
    const { name, image } = req.body
    const NewCategory = await db.collection('categories').insert({ name, image });
    res.json(NewCategory);
}

categoryCtrl.editCategory = async (req, res) => {
    const { id } = req.params;
    const { name, image } = req.body
    const db = await connection();
    const updatedProduct = await db.collection('categories').updateOne({ _id: ObjectID(id) }, {$set: { name, image }  });
    res.json({message: 'category updated'});
}

categoryCtrl.deleteCategory = async (req, res) => {
    const { id } = req.params;
    const db = await connection();
    const deletedCategory = await db.collection('categories').remove({ _id: ObjectID(id) });
    res.json({message: res.send('category deleted')}); 
}

categoryCtrl.getProductsFromCategory = async (req, res) => {
    const { id } = req.params;
    const db = await connection();
    const categories = await db.collection('products').find({categoryId: id}).toArray();
    res.json(categories);
}

module.exports = categoryCtrl