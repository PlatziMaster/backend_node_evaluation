const { ObjectId } = require('mongodb');
const {
    createElement,
    deleteElement,
    getAll,
    getById,
    getElementsByAgregation,
    updateElement
} = require('../../models');

exports.getAllCategories = async function() {
    return await getAll("categories");
}

exports.getCategoryById = async function(request) {
    const { id } = request.params   
    return await getById("categories", id);
}

exports.getProductsByCategory = async function(request) {
    const { id } = request.params 
    const filter = { categoryId: id }
    return await getElementsByAgregation("products", filter);
}

exports.insertCategory = async function(request) {
    const params = request.body;
    try {
        const category = await createElement("categories", params);
        return category;
    } catch(error) {
        throw new Error(error);
    }
}

exports.updateCategory = async function(request) {
    const { id } = request.params;
    const params = request.body;
    try {
        return await updateElement("categories", id, params)
    } catch(error) {
        throw new Error(error);
    }
}

exports.deleteCategory = async function(request) {
    const { id } = request.params;
    try {
        return await deleteElement("categories", id)
    } catch(error) {
        throw new Error(error);
    }
}