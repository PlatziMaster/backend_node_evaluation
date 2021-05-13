const db = require("../db");
const { CreateCategoryDto, UpdateCategoryDto } = require("../models/category");

const errorsResponse = {
  notFound: { message: "Not found" },
  unexpectedCreate: {
    errors: [{ message: "unexpected error while creating category" }],
  },
  unexpectedUpdate: {
    errors: [{ message: "unexpected error while updating category" }],
  },
  updateInvalidBody: { errors: [{ message: "invalid body" }] },
};

async function getAll(req, res) {
  return res.json(await db.collections.categories.findAll());
}

async function getOne(req, res) {
  const item = await db.collections.categories.findOneById(req.params.id);
  if (item) return res.json(item);
  res.status(404).json(errorsResponse.notFound);
}

async function create(req, res) {
  const { errors, obj } = CreateCategoryDto.validate(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  const dbRes = await db.collections.categories.insertOne(obj);
  if (dbRes) {
    return res.json(dbRes);
  }
  res.status(500).json(errorsResponse.unexpectedCreate);
}

async function update(req, res) {
  const { errors, obj } = UpdateCategoryDto.validate(req.body);
  if (errors.length > 0) return res.status(400).json({ errors });
  if (Object.keys(obj).length === 0)
    return res.status(400).json(errorsResponse.updateInvalidBody);
  const dbRes = await db.collections.categories.updateOne(req.params.id, obj);
  if (dbRes) {
    return res.json(dbRes);
  }
  res.status(404).json(errorsResponse.notFound);
}

async function deleteOne(req, res) {
  const success = await db.collections.categories.deleteOneById(req.params.id);
  if (success) return res.json({ message: "Successfully deleted" });
  res.status(404).json(errorsResponse.notFound);
}

module.exports = { getAll, getOne, create, update, delete: deleteOne };
