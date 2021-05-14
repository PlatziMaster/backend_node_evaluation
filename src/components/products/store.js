const Model = require('./model');

async function getProducts(id) {
    let filter = {};
    if(id != null){
        filter = { _id: id };
    }
    const products = await Model.find(filter);
    return products;
}

const addProduct = (product) => {
    const producto = new Model(product);
    return producto.save()
};

module.exports = {
    getProducts,
    addProduct
};