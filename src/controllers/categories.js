const db = require("../db");

async function getAll(req, res) {
  return res.json(await db.categories.findAll());
}

async function getOne(req, res) {
  const item = await db.categories.findOneById(req.params.id);
  if (item) return res.json(item);
  res.status(404).json({ message: "Not found" });
}

module.exports = { getAll, getOne };
