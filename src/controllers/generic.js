const db = require("../db");

const commonResponse = {
  notFound: { message: "Not found" },
  invalidBody: { errors: [{ message: "invalid body" }] },
  successfulDelete: { message: "Successfully deleted" },
};

function getAll(collection) {
  return async (req, res) =>
    res.json(await db.collections[collection].findAll());
}

function getOne(collection) {
  return async (req, res) => {
    const item = await db.collections[collection].findOneById(req.params.id);
    if (item) return res.json(item);
    res.status(404).json(commonResponse.notFound);
  };
}

function create(collection, dto, unexpectedErrorMessage) {
  return async (req, res) => {
    const { errors, obj } = dto.validate(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    const dbRes = await db.collections[collection].insertOne(obj);
    if (dbRes) {
      return res.json(dbRes);
    }
    res.status(500).json({ errors: [{ message: unexpectedErrorMessage }] });
  };
}

function update(collection, dto) {
  return async (req, res) => {
    const { errors, obj } = dto.validate(req.body);
    if (errors.length > 0) return res.status(400).json({ errors });
    if (Object.keys(obj).length === 0)
      return res.status(400).json(commonResponse.invalidBody);
    const dbRes = await db.collections[collection].updateOne(
      req.params.id,
      obj
    );
    if (dbRes) {
      return res.json(dbRes);
    }
    res.status(404).json(commonResponse.notFound);
  };
}

function deleteOne(collection) {
  return async (req, res) => {
    const success = await db.collections[collection].deleteOneById(
      req.params.id
    );
    if (success) return res.json(commonResponse.successfulDelete);
    res.status(404).json(commonResponse.notFound);
  };
}

module.exports = { getAll, getOne, create, update, deleteOne };
