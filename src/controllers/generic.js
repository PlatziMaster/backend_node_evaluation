const getDb = require("../db");

const commonResponse = {
  notFound: { message: "Not found" },
  invalidBody: { errors: [{ message: "invalid body" }] },
  successfulDelete: { message: "Successfully deleted" },
};

function getAll(collection) {
  return async (req, res) => {
    const db = await getDb();
    res.json(await db.collections[collection].findAll());
  };
}

function getOne(collection) {
  return async (req, res) => {
    const db = await getDb();
    const item = await db.collections[collection].findOneById(req.params.id);
    if (item) return res.json(item);
    res.status(404).json(commonResponse.notFound);
  };
}

function create(collection, dto, unexpectedErrorMessage, dbValidation = null) {
  return async (req, res) => {
    const db = await getDb();
    const { errors, obj } = dto.validate(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    if (typeof dbValidation === "function") {
      const dbValRes = await dbValidation(db, obj);
      if (dbValRes.length !== 0)
        return res.status(400).json({ errors: dbValRes });
    }
    const dbRes = await db.collections[collection].insertOne(obj);
    if (!dbRes) {
      res.status(500).json({ errors: [{ message: unexpectedErrorMessage }] });
    }
    return res.status(201).json(dbRes);
  };
}

function update(collection, dto, dbValidation = null) {
  return async (req, res) => {
    const db = await getDb();
    const { errors, obj } = dto.validate(req.body);
    if (errors.length > 0) return res.status(400).json({ errors });
    if (Object.keys(obj).length === 0)
      return res.status(400).json(commonResponse.invalidBody);
    if (typeof dbValidation === "function") {
      const dbValRes = await dbValidation(db, obj);
      if (dbValRes.length !== 0)
        return res.status(400).json({ errors: dbValRes });
    }
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
    const db = await getDb();
    const success = await db.collections[collection].deleteOneById(
      req.params.id
    );
    if (!success) return res.status(404).json(commonResponse.notFound);
    return res.json(success);
  };
}

module.exports = { getAll, getOne, create, update, deleteOne };
