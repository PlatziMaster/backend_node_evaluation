//Importación del componente de modelo de categorias
const categoryModel = require('./categoryModel');

console.log('[db] conectada con exito');


function addCategory(category) {
    const addCategory = new categoryModel(category);
    addCategory.save();
}

async function getCategories() {
    const categories = await categoryModel.find();
    return categories;
}

async function getOneCategory(id) {
    const foundCategory = await categoryModel.findOne({
        _id: id
    });

    return foundCategory;
}

async function updateCategory(id, name, image) {

    // Obtener el id de la categoria
    const foundCategory = await categoryModel.findOne({
        _id: id
    });

    foundCategory.name = name;
    foundCategory.image = image;

    const categoryUpdated = await foundCategory.save();
    return categoryUpdated;

}

async function deleteCategory(id){
    return categoryModel.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addCategory,
    list: getCategories,
    update: updateCategory,
    getOne: getOneCategory,
    delete: deleteCategory
}