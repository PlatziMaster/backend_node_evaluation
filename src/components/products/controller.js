const store = require('./store');

function addProduct(name, price, description, categoryId, image) {
    if (!name || !price ) {
        return Promise.reject('Incomplete data');
    }
    const product = {
        name: name,
        price: price,
        description: description,
        categoryId: categoryId,
        image: image,
    }
    let newProduct = store.add(product);
    return Promise.resolve(newProduct);
}


function getProducts(filterProduct) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterProduct));
    });
}

function updateProduct(id,  price) {
    return new Promise(async (resolve, reject) => {
        if (!id || !price ) {
            reject('Invalid Data');
            return false;
        }

        const result = store.update(id, price);
        resolve(result);
    });
}

function deleteProduct(id) {
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
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct,
};