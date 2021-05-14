const Model = require('./model');

async function getProducts(id) {
    if(id != null){
        const products = await Model.findOne({_id: id});
        return products;
    }
    else{
        const products = await Model.find({});
        return products;
    }
}

const addProduct = (product) => {
    const producto = new Model(product);
    return producto.save()
};

async function updateProduct(id, product){
    const updatedProd = await Model.findByIdAndUpdate(id, product);
    const result = await Model.findOne({_id: id});
    return result
};

const deleteProduct = (id) => {
    return Model.findByIdAndDelete(id);
};

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
};