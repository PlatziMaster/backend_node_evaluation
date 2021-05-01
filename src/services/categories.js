const mongoLibrary = require('../lib/mongo');

/**
 * Gets all the existing categories and returns a list with them
 * @returns {Array<Object>} Categories array
*/
async function getAllCategories() {
   try {
      let allCategories =  await (await mongoLibrary.getAll('categories')).toArray();
      return allCategories;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Gets the information about one category from the database
 * @param {String} productId Id of the category to be searched 
*/
async function getOneCategoryById(categoryId) {
   try {
      let product = await mongoLibrary.getOneById('categories', categoryId);

      return product;
   } catch (error) {
      console.log(error);
   }
}

async function getProductsByCategoryId(categoryId) {
   let existingCategory = await mongoLibrary.getOneById(categoryId);

   if (categoryExists) {
      let productsByCategory = await (await mongoLibrary.queryAll('products', { categoryId: existingCategory.name })).toArray();
      return productsByCategory;
   } else {
      return null;
   }
}

/**
 * Inserts a new category in the database.
 * @param {Object} categoryData Body of the new category to be inserted.
 * @returns {Object} Saved category.
 */
async function saveCategory(categoryData) {
   try {
      let savedCategory = await mongoLibrary.saveOne('categories', categoryData);

      return savedCategory;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Finds a category and if exists it will be modified 
 * @param {String} categoryId Id of the category that will be updated
 * @param {Object} newCategoryData New body of the category that will be saved
 */
 async function updateCategory(categoryId, newCategoryData) {
   try {
      let updatedCategory = await mongoLibrary.updateOne('categories', categoryId, newCategoryData);
      return updatedCategory;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Deletes a category from the database
 * @param {String} categoryId Id of the category to be deleted
 */
async function deleteCategory(categoryId) {
   try {
      let deletedCategory = await mongoLibrary.deleteOne('categories', categoryId);

      return deletedCategory;
   } catch (error) {
      console.log(error);
   }
}

module.exports = {
   getAllCategories,
   getOneCategoryById,
   getProductsByCategoryId,
   saveCategory,
   updateCategory,
   deleteCategory
}