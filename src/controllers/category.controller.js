const Category = require("../models/category.model.js");
const Product = require("../models/product.model.js");

// Create and Save a new Category
exports.create = (req, res) => {
  // Validate request
  //console.log(req.body.name)
  if (!req.body) {
    return res.status(400).send({
      message: "Category content can not be empty",
    });
  }

  // Create a Category
  const category = new Category({
    name: req.body.name,
    image: req.body.image,
  });

  // Save Category in the database
  category
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category.",
      });
    });
};

// Retrieve and return all category from the database.
exports.findAll = (req, res) => {
  Category.find()
    .then((category) => {
      res.send(category);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving category.",
      });
    });
};

// Find a single category with a categoryId
exports.findOne = (req, res) => {
  Category.findById(req.params.categoryId)
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found with id " + req.params.categoryId,
        });
      }
      res.send(category);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category not found with id " + req.params.categoryId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving category with id " + req.params.categoryId,
      });
    });
};

// Update a category identified by the categoryId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Category content can not be empty",
    });
  }

  // Find category and update it with the request body
  Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true })
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found with id " + req.params.categoryId,
        });
      }
      res.send(category);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category not found with id " + req.params.categoryId,
        });
      }
      return res.status(500).send({
        message: "Error updating category with id " + req.params.categoryId,
      });
    });
};

// Delete a category with the specified categoryId in the request
exports.delete = (req, res) => {
  Category.findByIdAndRemove(req.params.categoryId)
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found with id " + req.params.categoryId,
        });
      }
      res.send(true);
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Category not found with id " + req.params.categoryId,
        });
      }
      return res.status(500).send({
        message: "Could not delete category with id " + req.params.categoryId,
      });
    });
};

// Find all products by categoryId
exports.getProductsByCategoryId = (req, res) => {
  Product.find({ categoryId: req.params.categoryId })
    .then((products) => {
      if (!products) {
        return res.status(404).send({
          message:
            "Producst not found with category id " + req.params.categoryId,
        });
      }
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};
