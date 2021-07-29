import Joi from 'joi'
import { Model } from '../types'

const creation = Joi.object({
  name: Joi.string().alphanum().min(3).max(64).required(),
  image: Joi.string().uri(),
})

export const Category: Model = {
  creation,
}
