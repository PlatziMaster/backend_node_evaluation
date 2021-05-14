const Model = require('./model');
const ProductsModel = require('../products/model');

async function getCategorias(id) {
    if(id != null){
        const categories = await Model.findOne({_id: id});
        return categories;
    }
    else{
        const categories = await Model.find({});
        return categories;
    }
}

const addCategoria = (category) => {
    const categoria = new Model(category);
    return categoria.save()
};

async function updateCategoria(id, category) {
    const updatedCategory = await Model.findByIdAndUpdate(id, category);
    const result = await Model.findOne({_id: id});
    return result
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