const { OK, CREATED, NO_CONTENT } = require("http-status");
const { notFound, internal } = require("@hapi/boom");
const { Category, Products } = require("../models");

exports.list = async (req, res, next) => {
  const { limit, skip } = req.query;
  try {
    const list = await Category.find({}).limit(limit).skip(skip);
    return res.status(OK).json(list);
  } catch (error) {
    return next(error);
  }
};

exports.id = async (req, res, next) => {
  const { id } = req.params;
  try {
    const categoryOne = await Category.findById(id);
    if (!categoryOne) {
      return next(notFound());
    }
    return res.status(OK).json(categoryOne);
  } catch (error) {
    return next(error);
  }
};
exports.create = async (req, res, next) => {
  try {
    const created = await Category(req.body)
    await created.save()
    return res.status(CREATED).json(created);
  } catch (error) {
    return res.status(CREATED).json({ created: 465 });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const updateCategory = await Category.findOneAndUpdate({ _id }, {
      $set: {
        ...req.body,
      },
    });
    if(updateCategory.n <= 0){
      return next(internal())
    }
    const findPCategory = await Category.findById(_id);
    return res.status(OK).json(findPCategory);
  } catch (error) {
    return next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteOne = await Category.deleteOne({ _id });
    return res.status(OK).send(deleteOne.n >= 1);
  } catch (error) {
    return next(error);
  }
};

exports.products = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const list = await Products.find({ categoryId }).lean();
    return res.status(OK).json(list);
  } catch (error) {
    return next(error);
  }
};
