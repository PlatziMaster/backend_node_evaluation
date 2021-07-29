import Joi from 'joi'
import { Model } from '../types'

const creation = Joi.object({
  name: Joi.string().alphanum().min(3).max(64).required(),
  price: Joi.number().precision(2).min(0).required(),
  description: Joi.string().min(3).max(128).required(),
  categoryId: Joi.string().hex().min(24).max(24).required(),
  image: Joi.string().uri(),
})

export const Product: Model = {
  creation,
}
