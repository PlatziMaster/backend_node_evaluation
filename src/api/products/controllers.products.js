const { ObjectId } = require('mongodb');
const { deleteProduct } = require('../categories/controller.categories');
const mongoMain = require('../../config/mongo');
const {
    createElement,
    deleteElement,
    getAll,
    getById,
    updateElement
} = require('../../models');

const mongo = new mongoMain();

exports.getAllProduct = async function() {
    return await getAll("products");
}

exports.getProductById = async function(request) {
    const { id } = request.params   
    return await getById("products", id);
}

exports.insertProduct = async function(request) {
    const params = request.body;
    try {
        const inserted = await createElement("products", params);
        return inserted;
    } catch(error) {
        throw new Error(error);
    }
}

exports.updateProduct = async function(request) {
    const { id } = request.params;
    const params = request.body;
    try {
        return await updateElement("products", id, params)
    } catch(error) {
        throw new Error(error);
    }
}

exports.deleteProduct = async function(request) {
    const { id } = request.params;
    try {
        return await deleteElement("products", id)
    } catch(error) {
        throw new Error(error);
    }
}