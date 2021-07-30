import { Schema } from 'joi'

/**
 * Interface to the models.
 */
export interface Model {
  resource: string
  identification: Schema
  creation: Schema
  update: Schema
}
