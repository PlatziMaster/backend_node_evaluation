module.exports = app => {
  const products = require("../controllers/product.controller.js");
  const categories = require("../controllers/category.controller.js");

  /* --------------------------------------
                PRODUCT ROUTES
      -----------------------------------*/

  // create new
  app.post("/api/products", products.create);

  // Retrieve all
  app.get("/api/products", products.findAllProducts);

  // Retrieve a single item by ID
  app.get("/api/products/:productId", products.findOne);

  // Update an item with ID
  app.put("/api/products/:productId", products.update);

  // Delete an intem by ID
  app.delete("/api/products/:productId", products.delete);

  /* --------------------------------------
                CATEGORY ROUTES
      -----------------------------------*/

  // Return all categories
  app.get("/api/categories/", categories.findAllCategories);

  // Retrieve a category by id
  app.get("/api/categories/:categoryId", categories.findOneCategory);

  // Create category
  app.post("/api/categories/", categories.createCategory);

  // Modify category
  app.put("/api/categories/:categoryId", categories.editCategory);

  // Delete Category
  app.delete("/api/categories/:categoryId", categories.deleteCategory);

  // Returns all products in one category
  app.get(
    "/api/categories/:categoryId/products",
    categories.allProductsInCategory
  );
};
