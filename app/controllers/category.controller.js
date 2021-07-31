/* -----------------------------------------
        Controllers for categories 
    ---------------------------------------*/
const Category = require("../models/category.model.js");
const Product = require("../models/product.model.js");

// Return list of categories
exports.findAllCategories = (req, res) => {
  Category.find()
    .then(categories => {
      res.send(categories);
    })
    .catch(err => {
      message: err.message ||
        "Some error occurred while retrieving your categories";
    });
};

// Return category by id
exports.findOneCategory = (req, res) => {
  Category.findById(req.params.categoryId)
    .then(category => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found by id" + req.params.categoryId
        });
      }
      res.send(category);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category not found using id " + req.params.categoryId
        });
      }
      return res.status(500).send({
        message:
          "There was an error retrieving category using id " +
          req.params.categoryId
      });
    });
};

// Create a category
exports.createCategory = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "field 'name' cannot be empty"
    });
  }

  // Create a Category
  const category = new Category({
    name: req.body.name || "Unnamed category",
    image: req.body.image
  });

  // Save category in the database
  category
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "There was an error while creating the category"
      });
    });
};

// Modify a category
exports.editCategory = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "Name cannot be empty!"
    });
  }

  // Find category and update it with request body
  Category.findByIdAndUpdate(
    req.params.categoryId,
    {
      name: req.body.name,
      image: req.body.image
    },
    { new: true }
  )
    .then(category => {
      // Validate if not empty
      if (!category) {
        return res.status(404).send({
          message:
            "I couln't retrieve category with id " + req.params.categoryId
        });
      }
      res.send(category);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category not found using id " + req.params.categoryId
        });
      }
      return res.status(500).send({
        message:
          "There was an error updating category with id " +
          req.params.categoryId
      });
    });
};

exports.deleteCategory = (req, res) => {
  Category.findByIdAndRemove(req.params.categoryId)
    .then(category => {
      if (!category) {
        return res.status(404).send({
          message: "I didn't find any category with id " + req.params.categoryId
        });
      }
      res.send({ message: "Category was correctly deleted" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "I couldn't find item with id " + req.params.categoryId
        });
      }
      return res.status(500).send({
        message:
          "Sorry, I wasn't able to delete item with id " + req.params.categoryId
      });
    });
};

// Return list of products from a category
exports.allProductsInCategory = (req, res) => {
  Product.find({
    categoryId: req.params.categoryId
  })
    .then(products => {
      if (!products) {
        return res.status(404).send({
          message:
            "There are no products with category id " + req.params.categoryId
        });
      }
      res.send(products);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message:
            "There are no products with category id " + req.params.categoryId
        });
      }
      return res.status(500).send({
        message:
          "There was an error retrieving products with category id " +
          req.params.categoryId
      });
    });
};
