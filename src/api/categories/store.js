const Model = require('../../models/model')

function addCategories(category) {
    const myCategory = new Model(category);
    myCategory.save();
}

const getCategories = async (filterCategory) => {
    let filter = filterCategory ? {_id: filterCategory} : {}
    return Model.find(filter);
}

const updateCategory = async (id, name, image) => {
    let data = {
        name: name,
        image: image
    }
    return await Model.findByIdAndUpdate(id, data, {runValidators: true, new: true})
}

const removeCategory = (id) => Model.findByIdAndDelete(id);

module.exports = {
    add: addCategories,
    list: getCategories,
    update: updateCategory,
    remove: removeCategory,
}

