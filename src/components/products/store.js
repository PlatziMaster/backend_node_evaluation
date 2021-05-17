const Model = require('./model')

function addProduct(product) {
    const newProduct = new Model(product);
    newProduct.save();
    return newProduct;
}

function getProducts(filterProduct) {
    let filter = {}
    if (filterProduct !== null) {
        filter =  filterProduct ;
    };
    return new Promise((resolve, reject) => {
        Model.find(filter)
            .populate('categoryId')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            });
    });
}

async function updateProduct(id, price) {
    const foundProduct = await Model.findOne({
        _id: id
    });

    foundProduct.price = price;
    const updatedProduct = await foundProduct.save();
    return updatedProduct;
}

function removeProduct(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addProduct,
    list: getProducts,
    update: updateProduct,
    remove: removeProduct,
}