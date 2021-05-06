const store = require('./store');

const addCategory = (name, image) => {
    return new Promise((resolve, reject) => {
        if (!name || !image) {
            console.error('[messageController] No hay name o image');
            return reject('Los datos son incorrectos');
        }
        const descriptionCategory = {
            name: name,
            image: image
        };
        store.add(descriptionCategory);
        resolve(descriptionCategory);
    })
}

const getCategories = (filterCategory) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterCategory));
    })
}

const updateCategory = (id, name, image) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !name || !image) {
            reject('Invalid data');
            return false
        }
        const result = await store.update(id, name, image)
        resolve(result);
    })
}

const deleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id invalido')
        }
        store.remove(id)
            .then(() => resolve())
            .catch(error => reject(error))
    })
}

module.exports = {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
}
