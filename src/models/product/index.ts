import { Model } from '../../types'
import schemas from './schemas'

export const Product: Model = {
  resource: 'products',
  ...schemas,
}
