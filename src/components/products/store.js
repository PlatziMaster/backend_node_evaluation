const Model = require('./model');
const db = require('mongoose');

const addProduct = (product) => {
    const producto = new Model(product);
    return producto.save()
};

module.exports = {
    addProduct
};