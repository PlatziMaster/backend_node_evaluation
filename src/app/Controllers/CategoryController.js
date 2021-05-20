const BaseController = require("./BaseController");

class CategoryController extends BaseController
{
  products = async (category_id) => {
    let response = await this.database.collection('products')
      .find({ categoryId: category_id })
      .toArray();
    return response;
  }
}

module.exports = CategoryController;