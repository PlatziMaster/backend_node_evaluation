import { Model } from '../../types'
import schemas from './schemas'

export const Category: Model = {
  resource: 'categories',
  ...schemas,
}
