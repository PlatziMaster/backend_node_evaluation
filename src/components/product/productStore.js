//Importación del componente de modelo de categorias
const productModel = require('./productModel');

console.log('[db] conectada con exito');


function addProduct(product) {
    const addProduct = new productModel(product);
    addProduct.save();
}

async function getProducts() {
    return new Promise((resolve, reject) => {
        const products = productModel.find()
            .populate('categoryId')
            .exec((error, populate) => {
                if (error) {
                    reject(error)
                    return false;
                }

                resolve(populate);
            });
    });

}

async function getOneProduct(id) {
    const founProduct = await productModel.findOne({
        _id: id
    });

    return founProduct;
}

async function getProductsByCategory(id) {
        
        const products = await productModel.find(id);
        return products;
}

async function updateProduct(id, name, price, description, categoryId, image) {

    // Obtener el id del producto
    const foundCategory = await productModel.findOne({
        _id: id
    });

    foundCategory.name = name;
    foundCategory.price = price;
    foundCategory.description = description;
    foundCategory.categoryId = categoryId;
    foundCategory.image = image;

    const productUpdated = await foundCategory.save();
    return productUpdated;

}

async function deleteProduct(id) {
    return productModel.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addProduct,
    list: getProducts,
    update: updateProduct,
    getOne: getOneProduct,
    delete: deleteProduct,
    listFilter: getProductsByCategory
}