const Model = require('./model');
const ProductsModel = require('../products/model');

async function getCategorias(id) {
    let filter = {};
    if(id != null){
        filter = { _id: id };
    }
    const categories = await Model.find(filter);
    return categories;
}

const addCategoria = (category) => {
    const categoria = new Model(category);
    return categoria.save()
};

async function updateCategoria(id, category) {
    const updatedCategory = await Model.findByIdAndUpdate(id, category);
    return updatedCategory
};

const deleteCategoria = (id) => {
    return Model.findByIdAndDelete(id);
};

async function getProductosByCategoria(id){
    const products = await ProductsModel.find({ categoryId: id })
    return products
}

module.exports = {
    getCategorias,
    addCategoria,
    updateCategoria,
    deleteCategoria,
    getProductosByCategoria
};