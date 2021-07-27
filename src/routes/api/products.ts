import { Express } from 'express'
import ProductsService from '../../services/resources/products'
import buildRoutes from './builder'

const resource = 'products'
const service = new ProductsService(resource)

/**
 * Set all CRUD endpoints for the resource.
 *
 * @param app - Express application.
 */
const routes = (app: Express): void => {
  return buildRoutes(app, resource, service)
}

export default routes
