const store = require('./store');

const addCategory = (data, file) => {
    return new Promise((resolve, reject) => {
        if (!data || !file) {
            console.error('[messageController] No hay name o image');
            return reject('Los datos son incorrectos');
        }
        data.image = file ? file.Location : ''
        store.add(data);
        resolve(data);
    });
};

const getCategories = (filterCategory, products = false) => {
    return new Promise(resolve => resolve(store.list(filterCategory, products)));
};

const updateCategory = (categoryId, newDataCategory, newFile) => {
    return new Promise(async (resolve, reject) => {
        if (!categoryId || !newDataCategory || !newFile) {
            reject('Invalid data');
        }
        newDataCategory.image = newFile ? newFile.Location : ''
        const result = await store.update(categoryId, newDataCategory)
        resolve(result);
    });
};

const deleteCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        if (!categoryId) {
            reject('Id invalido')
        }
        store.remove(categoryId)
            .then(() => resolve())
            .catch(error => reject(error))
    });
};

module.exports = {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
};
