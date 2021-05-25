const {
    getDocs,
    getDocById,
    createDoc,
    updateDoc,
    deleteDoc,
    getDocsFromGroup
} = require('../queries');


async function getCategories() {
    return await getDocs("categories");
}

async function getCategoryById(req) {
    const { id } = req.params;
    return await getDocById("categories", id);
}

async function createCategory(req) {
    const fields = req.body;
    try {
        const category = await createDoc("categories", fields);
        return category;
    } catch(e) {
        throw new Error(e);
    }
}

async function updateCategory(req) {
    const { id } = req.params;
    const fields = req.body;
    try {
        return await updateDoc("categories", id, fields);
    } catch(e) {
        throw new Error(e);
    }
}

async function deleteCategory(req) {
    const { id } = req.params;
    try {
        return await deleteDoc("categories", id);
    } catch(e) {
        throw new Error(e);
    }
}

async function getProductsFromCategory(req) {
    const { id } = req.params;
    const group = { categoryId: id };
    return await getDocsFromGroup("products", group);
};

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getProductsFromCategory
};