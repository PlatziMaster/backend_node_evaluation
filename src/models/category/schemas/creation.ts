import Joi from 'joi'

const creation = Joi.object({
  name: Joi.string().min(3).max(64).required(),
  image: Joi.string().uri(),
})

export default creation
