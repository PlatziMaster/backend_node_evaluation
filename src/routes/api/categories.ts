import { Express } from 'express'
import CategoriesService from '../../services/resources/categories'
import BaseRouter from '../../utils/base-router'

const resource = 'categories'
const service = new CategoriesService(resource)
const router = new BaseRouter(resource, service)

/**
 * Set all CRUD endpoints for the resource.
 *
 * @param app - Express application.
 */
const routes = (app: Express): void => {
  router.applyTo(app)
}

export default routes
