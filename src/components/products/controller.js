const store = require('./store');

const getProducts = (id) => store.getProducts(id);

const addProduct = (product) => {
    return new Promise((resolve, reject) => {
        const result = store.addProduct(product);
        resolve(result);
    });
};

const updateProduct = (id, product) => {
    return new Promise((resolve, reject) => {
        const result = store.updateProduct(id, product);
        resolve(result);
    });
};

const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            console.error('[productsController] No se envió id');
            return reject('No se envió id');
        }
        store.deleteProduct(id)
            .then(() => resolve())
            .catch(error => reject(error));
    });
};

module.exports = { 
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}