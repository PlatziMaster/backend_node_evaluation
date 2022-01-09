import Joi from 'joi'

const creation = Joi.object({
  name: Joi.string().min(3).max(64).required(),
  price: Joi.number().positive().precision(2).required(),
  description: Joi.string().min(3).max(128).required(),
  categoryId: Joi.string().hex().min(24).max(24).required(),
  image: Joi.string().uri(),
})

export default creation
