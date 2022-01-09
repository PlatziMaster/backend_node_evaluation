import Joi from 'joi'

const update = Joi.object({
  name: Joi.string().min(3).max(64),
  image: Joi.string().uri(),
})

export default update
