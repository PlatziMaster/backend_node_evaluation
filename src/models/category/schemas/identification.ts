import Joi from 'joi'

const identification = Joi.object({
  id: Joi.string().hex().min(24).max(24).required(),
})

export default identification
