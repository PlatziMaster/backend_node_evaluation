import { Express } from 'express'
import { Category } from '../../models'
import CategoriesService from '../../services/resources/categories'
import BaseRouter from '../../utils/base-router'

const service = new CategoriesService(Category.resource)
const router = new BaseRouter(Category, service)

/**
 * Set all CRUD endpoints for the resource.
 *
 * @param app - Express application.
 */
const routes = (app: Express): void => {
  router.applyTo(app)
}

export default routes
