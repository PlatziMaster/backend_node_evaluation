const Model = require('./model');

const addProduct = (product) => {
    const myProduct = new Model(product);
    return myProduct.save()
};

const getProducts = (filterProduct) => {
    /**@param {Number} id value of `_id` to query by
     * @param {Boolean} [optional] if true filter the products with the categoryId
     * @return {Object}
     */
    return new Promise(((resolve, reject) => {
        let filter = filterProduct ? {_id: filterProduct} : {}
        Model.find(filter)
            .populate('categoryId')
            .exec((error, populated) => {
                if (error) {
                    reject(error)
                }
                resolve(populated);
            })
    }));
};

const updateProduct = async (productId, newData) => {
    /**@param {string} productId of the product to be update
     * @param{Object} new data of the product
     */
    return await Model.findByIdAndUpdate(productId, newData, {runValidators: true, new: true});
};


const removeProduct = (productId) => {
    /**@param {String} productId of the product to be deleted
     */
    return Model.findByIdAndDelete(productId);
};

module.exports = {
    add: addProduct,
    list: getProducts,
    update: updateProduct,
    remove: removeProduct,
};
