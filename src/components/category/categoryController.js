// Importaciones de la capa de datos
const categoryStore = require('./categoryStore');
const productStore = require('../product/productStore');


function getCategories() {
    return new Promise((resolve, reject) => {
        resolve(categoryStore.list());
    })
}

function getOneCategory(id) {

    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid Id');
        }

        const result = await categoryStore.getOne(id);
        resolve(result);
    });
}

function getProductsByCategory(id) {
    return new Promise((resolve, reject) => {
        resolve(productStore.listFilter(id));
    })
}

function addCategory(name, image) {

    return new Promise((resolve, reject) => {

        if (!name || !image) {
            console.error('[MessageController] El campo name o el campo image no fueron introducidos.');
            reject('Los datos son incorrectos');
        }

        const fullCategory = {
            name: name,
            image: image
        };

        categoryStore.add(fullCategory);

        console.log(fullCategory);
        resolve(fullCategory);
    })

}

function updateCategory(id, name, image) {
    return new Promise(async (resolve, reject) => {
        if (!id || !name || !image) {
            reject('Invalid data');
            return false;
        }

        const result = await categoryStore.update(id, name, image);
        resolve(result);
    });
}

function deleteCategory(id) {

    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid Id');
        }

        const result = await categoryStore.delete(id);
        resolve(result);
    });


}



module.exports = {
    addCategory,
    getCategories,
    updateCategory,
    getOneCategory,
    deleteCategory,
    getProductsByCategory
};