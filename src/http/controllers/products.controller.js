const { OK, CREATED, NO_CONTENT } = require("http-status");
const { notFound } = require("@hapi/boom");
const { Products } = require("../models");

exports.list = async (req, res, next) => {
  const { limit, skip } = req.query;
  try {
    const list = await Products.find({}).limit(limit).skip(skip).lean();
    return res.status(OK).json(list);
  } catch (error) {
    return next();
  }
};

exports.id = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneProduct = await Products.findById(id).lean();
    if (!oneProduct) {
      return next(notFound());
    }
    return res.status(OK).json(oneProduct);
  } catch (error) {
    return next(error);
  }
};
exports.create = async (req, res, next) => {
  try {
    const created = await Products(req.body).save();
    return res.status(CREATED).json(created);
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const updateCreated = await Products.updateOne(
      { _id },
      {
        $set: {
          ...req.body,
        },
      }
    );
    if(updateCreated.n <= 0){
      return next(internal())
    }
    const findProduct = await Products.findById(_id);
    return res.status(OK).json(findProduct);
  } catch (error) {
    return next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteProducts = await Products.deleteOne({ _id });
    return res.status(OK).send(deleteProducts.n >= 1);
  } catch (error) {
    return next(error);
  }
};
