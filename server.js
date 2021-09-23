const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Crud");
});

app.listen(3000, () => {
  console.log("Servidor corriendo");
});
