import { Express } from 'express'
import { Product } from '../../models'
import ProductsService from '../../services/resources/products'
import BaseRouter from '../../utils/base-router'

const resource = 'products'
const service = new ProductsService(resource)
const router = new BaseRouter(resource, service, Product)

/**
 * Set all CRUD endpoints for the resource.
 *
 * @param app - Express application.
 */
const routes = (app: Express): void => {
  router.applyTo(app)
}

export default routes
