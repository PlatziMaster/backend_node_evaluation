const Product = require("../models/product.model.js");

/* -----------------------------------------
        Controllers for products 
    ---------------------------------------*/

// Create and Save a new product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "field 'name' cannot be empty"
    });
  }

  // Create a Product
  const product = new Product({
    name: req.body.name || "Untitled product",
    price: req.body.price,
    description: req.body.description,
    categoryId: req.body.categoryId,
    image: req.body.image
  });

  // Save product int the database
  product
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "There was an error while creating the product"
      });
    });
};

// Retrieve and return all notes from database

exports.findAllProducts = (req, res) => {
  Product.find()
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving your products"
      });
    });
};

// Find a single note with a productId

exports.findOne = (req, res) => {
  Product.findById(req.params.productId)
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: "Item not found with id " + req.params.productId
        });
      }
      res.send(product);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Item no encontrado usando id " + req.params.productId
        });
      }
      return res.status(500).send({
        message:
          "Ups! Hubo un error al obtener el item con la id " +
          req.params.productId
      });
    });
};

// Update a product identified by noteId in the request
exports.update = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "Name cannot be empty"
    });
  }

  // Find product and update it with request body
  Product.findByIdAndUpdate(
    req.params.productId,
    {
      name: req.body.name || "Unnamed item",
      price: req.body.price,
      description: req.body.description,
      categoryId: req.body.categoryId,
      image: req.body.image
    },
    { new: true }
  )
    .then(product => {
      // Validate if not empty
      if (!product) {
        return res.status(404).send({
          message: "No se encontró item con el id " + req.params.productId
        });
      }
      res.send(product);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found using id " + req.params.productId
        });
      }
      return res.status(500).send({
        message:
          "Hubo un error al actualizar el producto con el id " +
          req.params.productId
      });
    });
};

// Delete a note with the specified productId in the request
exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: "No encontré ningun item con el id " + req.params.productId
        });
      }
      res.send({ message: "El item se borró con éxito!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "No encontré el item con id " + req.params.productId
        });
      }
      return res.status(500).send({
        message: "No pude borrar el item con el id " + req.params.productId
      });
    });
};
