const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/productos", (req, res) => {
  res.render("productos");
});

route.get("/categorias", (req, res) => {
  res.render("categorias");
});

module.exports = route;
