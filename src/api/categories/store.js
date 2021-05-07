const Model = require('./model')
const ModelProducts = require('../products/model')

const addCategories = (category) => {
    /**@param {Object} new category to be inserted
     * @type {Document}
     */
    const myCategory = new Model(category);
    return myCategory.save();
};

const getCategories = async (categoryId, products) => {
    /**@param {Number} id value of `_id` to query by
     * @param {Boolean} [optional] if true filter the products with the categoryId
     * @return {Object}
     */
    if (products) {
        return new Promise((resolve, reject) => {
            let filterProducts = {categoryId: categoryId,};
            ModelProducts.find(filterProducts)
                .populate('categoryId')
                .exec((err, populated) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(populated)
                })
        })
    }
    let filter = categoryId ? {_id: categoryId} : {};
    return Model.find(filter);
};

const updateCategory = async (categoryId, newData) => {
    /**@param {string} categoryId of the category to be update
     * @param{Object} new data of the category
     */
    return await Model.findByIdAndUpdate(categoryId, newData, {runValidators: true, new: true});
};


const removeCategory = (categoryId) => {
    /**@param {String} categoryId of the category to be deleted
     */
    return Model.findByIdAndDelete(categoryId);
};

module.exports = {
    add: addCategories,
    list: getCategories,
    update: updateCategory,
    remove: removeCategory,
};

