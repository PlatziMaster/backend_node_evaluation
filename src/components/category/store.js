const CategoryModel = require('./model');

const addCategory = async catName => {
  try {
    const newCat = new CategoryModel({ name: catName});
    await newCat.save();
    return newCat;
  } catch (err) {
    throw new Error('[category store]', err);
  }
}

const getCategories = async () => {
  try {
    const categories = await CategoryModel.find();
    return categories;
  } catch (e) {
    throw new Error('[category store]', err);
  }
}

const updateCategory = async (id, newName) => {
  try {
    const category = await CategoryModel.findById(id);
    category.name = newName;
    const catUpdated = await category.save();
    return catUpdated;
  } catch (e) {
    throw new Error('[category store]', err);
  }
}

const deleteCategory = async (id) => {
  try {
    const category = await CategoryModel.findById(id);
    category.delete();
  } catch (e) {
    throw new Error('[category store]', err);
  }
}

module.exports = {
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory
}