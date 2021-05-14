const Model = require('./model');

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

module.exports = {
    getCategorias,
    addCategoria,
    updateCategoria,
    deleteCategoria
};