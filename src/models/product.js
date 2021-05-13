const { ObjectValidator } = require("../utils/object-validator");

const CreateProductDto = new ObjectValidator({
  name: { required: true, string: true },
  price: { required: true, number: true },
  description: { required: true, string: true },
  categoryId: { required: true, string: true },
  image: { required: true, string: true },
});

const UpdateProductDto = new ObjectValidator({
  name: { string: true },
  price: { number: true },
  description: { string: true },
  categoryId: { string: true },
  image: { string: true },
});

module.exports = { CreateProductDto, UpdateProductDto };
