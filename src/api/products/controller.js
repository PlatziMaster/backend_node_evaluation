const store = require('./store');

const addProduct = (product, file) => {
    return new Promise((resolve, reject) => {
        if (!product || !file) {
            console.error('[messageController] Datos incompletos');
            return reject('Los datos son incorrectos');
        }
        product.image = file ? file.Location : '';
        store.add(product);
        resolve(product);
    });
};

const getProducts = (filterProduct) => store.list(filterProduct);

const updateProduct = (productId, newDataProduct, newFile) => {
    return new Promise(async (resolve, reject) => {
        if (!productId || !newDataProduct.categoryId) {
            reject('Los datos son incorrectos');
        }
        newDataProduct.image = newFile ? newFile.Location : ''
        const result = await store.update(productId, newDataProduct);
        resolve(result);
    });
}

const deleteProduct = (productId) => {
    return new Promise((resolve, reject) => {
        if (!productId) {
            reject('Id invalido');
        }
        store.remove(productId)
            .then(() => resolve())
            .catch(error => reject(error));
    });
};

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
};
