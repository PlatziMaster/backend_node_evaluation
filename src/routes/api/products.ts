import { Express } from 'express'
import { Product } from '../../models'
import ProductsService from '../../services/resources/products'
import BaseRouter from '../../utils/base-router'

const service = new ProductsService(Product.resource)
const router = new BaseRouter(Product, service)

/**
 * Set all CRUD endpoints for the resource.
 *
 * @param app - Express application.
 */
const routes = (app: Express): void => {
  router.applyTo(app)
}

export default routes
