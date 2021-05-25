const {
    getDocs,
    getDocById,
    createDoc,
    updateDoc,
    deleteDoc
} = require('../queries');


async function getProducts() {
    return await getDocs("products");
};

async function getProductById(req) {
    const { id } = req.params;
    return await getDocById("products", id);
};

async function createProduct(req) {
    const fields = req.body;
    try {
        const product = await createDoc("products", fields);
        return product;
    } catch(e) {
        throw new Error(e);
    }
};

async function updateProduct(req) {
    const { id } = req.params;
    const fields = req.body;
    try {
        return await updateDoc("products", id, fields);
    } catch(e) {
        throw new Error(e);
    }
};

async function deleteProduct(req) {
    const { id } = req.params;
    try {
        return await deleteDoc("products", id);
    } catch(e) {
        throw new Error(e);
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};