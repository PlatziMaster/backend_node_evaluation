import Joi from 'joi'

const creation = Joi.object({
  name: Joi.string().min(3).max(64),
  price: Joi.number().positive().precision(2),
  description: Joi.string().min(3).max(128),
  categoryId: Joi.string().hex().min(24).max(24),
  image: Joi.string().uri(),
})

export default creation
