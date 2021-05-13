const db = require("../db");
const { CreateCategoryDto, UpdateCategoryDto } = require("../models/category");

const unexpectedErrorResponse = {
  create: { errors: [{ message: "unexpected error while creating category" }] },
};

async function getAll(req, res) {
  return res.json(await db.categories.findAll());
}

async function getOne(req, res) {
  const item = await db.categories.findOneById(req.params.id);
  if (item) return res.json(item);
  res.status(404).json({ message: "Not found" });
}

async function create(req, res) {
  const { errors, obj } = CreateCategoryDto.validate(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  const dbRes = await db.categories.insertOne(obj);
  if (dbRes) {
    return res.json(dbRes);
  }
  res.status(500).json(unexpectedErrorResponse.create);
}

module.exports = { getAll, getOne, create };
