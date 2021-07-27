const Product = require("../models/note.model.js");

// Create and Save a new note
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "field 'name' cannot be empty"
    });
  }

  // Create a Note
  const note = new Product({
    name: req.body.name || "Untitled product",
    price: req.body.price
  });

  // Save note int the database
  note
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error mientras se creaba la nota"
      });
    });
};

// Retrieve and return all notes from database

exports.findAll = (req, res) => {
  Product.find()
    .then(notes => {
      res.send(notes);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving your notes"
      });
    });
};

// Find a single note with a noteId

exports.findOne = (req, res) => {
  Product.findById(req.params.noteId)
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: "Item not found with id " + req.params.noteId
        });
      }
      res.send(note);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Item no encontrado usando id " + req.params.noteId
        });
      }
      return res.status(500).send({
        message:
          "Ups! Hubo un error al obtener el item con la id " + req.params.noteId
      });
    });
};

// Update a note identified by noteId in the request
exports.update = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "Name cannot be empty"
    });
  }

  // Find note and update it with request body
  Product.findByIdAndUpdate(
    req.params.noteId,
    {
      name: req.body.name || "Unnamed item",
      price: req.body.price
    },
    { new: true }
  ).then(note => {
    // Validate if not empty
    if (!note) {
      return res.status(404).send({
        message: "No se encontró item con el id " + req.params.noteId
      });
    }
    return res.status(500).send({
      message:
        "Hubo un error al actualizar la nota con el id " + req.params.noteId
    });
  });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.noteId)
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: "No encontré ningun item con el id " + req.params.noteId
        });
      }
      res.send({ message: "El item se borró con éxito!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "No encontré el item con id " + req.params.noteId
        });
      }
      return res.status(500).send({
        message: "No pude borrar el item con el id " + req.params.noteId
      });
    });
};
