const store = require('./store');

function addCategory(name, image) {
    if (!name || !image) {
        return Promise.reject('Incomplete data');
    }
    const category = {
        name: name,
        image: image,
    }
    let newCategory = store.add(category);
    return Promise.resolve(newCategory);
}


function getCategories(filterCategory) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterCategory));
    });
}

function updateCategory(id, name, image) {
    return new Promise(async (resolve, reject) => {
        if (!id || !name) {
            reject('Invalid Data');
            return false;
        }

        const result = store.update(id, name, image);
        resolve(result);
    });
}

function deleteCategory(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid Id');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            });
    });
}

module.exports = {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory,
};