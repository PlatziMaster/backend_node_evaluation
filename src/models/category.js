const { ObjectValidator } = require("../utils/object-validator");

const CreateCategoryDto = new ObjectValidator({
  name: { required: true, string: true },
  image: { required: true, string: true },
});

const UpdateCategoryDto = new ObjectValidator({
  name: { string: true },
  image: { string: true },
});

module.exports = { CreateCategoryDto, UpdateCategoryDto };
