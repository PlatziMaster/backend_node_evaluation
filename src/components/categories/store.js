const Model = require('./model')

function addCategory(product) {
    const newCategory = new Model(product);
    newCategory.save();
    return newCategory;
}

async function getCategories(filterCategory) {
    let filter = {}
    if (filterCategory !== null) {
        filter = { _id: filterCategory };
    }
    const categories = await Model.find(filter);
    return categories;
}

async function updateCategory(id, name, image) {
    const foundCategory = await Model.findOne({
        _id: id
    });

    foundCategory.name = name;
    foundCategory.image = image;
    const updatedCategory = await foundCategory.save();
    return updatedCategory;
}

function removeCategory(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addCategory,
    list: getCategories,
    update: updateCategory,
    remove: removeCategory,
}