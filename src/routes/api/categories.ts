import { Express } from 'express'
import CategoriesService from '../../services/resources/categories'
import buildRoutes from './builder'

const resource = 'categories'
const service = new CategoriesService(resource)

/**
 * Set all CRUD endpoints for the resource.
 *
 * @param app - Express application.
 */
const routes = (app: Express): void => {
  return buildRoutes(app, resource, service)
}

export default routes
