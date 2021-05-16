// Importaciones de la capa de datos
const productStore = require('./productStore');

function getProducts() {
    return new Promise((resolve, reject) => {
        resolve(productStore.list());
    })
}

function getOneProduct(id) {

    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid Id');
        }

        const result = await productStore.getOne(id);
        resolve(result);
    });
}

function addProduct(name, price, description, categoryId, image) {

    return new Promise((resolve, reject) => {
        if (!name && !price && !description & !categoryId) {
            console.error('[MessageController] Por favor rellena los campos obligatorios.');
            reject('Los datos son incorrectos');
        }
        const fullProduct = {
            name: name,
            price: price,
            description: description,
            categoryId: categoryId,
            image: image
        };

        productStore.add(fullProduct);

        console.log(fullProduct);
        resolve(fullProduct);
    })

}

function updateProduct(id, name, price, description, categoryId, image) {
    console.log(id);
    console.log(name);
    console.log(price);
    console.log(description);
    console.log(categoryId);
    console.log(image);
    return new Promise(async (resolve, reject) => {
        if (!id || !name || !image) {
            reject('Invalid data');
            return false;
        }

        const result = await productStore.update(id, name, price, description, categoryId, image);
        resolve(result);
    });
}

function deleteProduct(id) {

    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid Id');
        }
        const result = await productStore.delete(id);
        resolve(result);
    });

}



module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    getOneProduct,
    deleteProduct
};

