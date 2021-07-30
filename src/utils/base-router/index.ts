import { Express, Router } from 'express'
import { Model, ResourceService } from '../../types'
import { create, erase, find, read, replace, update } from './actions'

/**
 * Class that generate all endpoints for basic CRUD of a resource.
 */
class RouteBuilder {
  model: Model
  service: ResourceService

  /**
   * Create a route builder class.
   *
   * @param resource - Name of the resource.
   * @param service - Instace of the service of the resource.
   */
  constructor(model: Model, service: ResourceService) {
    this.model = model
    this.service = service
  }

  /**
   * Mutate the app applying the CRUD endpoints.
   *
   * @param app - The main express application.
   */
  applyTo(app: Express): void {
    const router = Router()

    create(router, this.service, this.model)
    read(router, this.service)
    find(router, this.service, this.model)
    replace(router, this.service)
    update(router, this.service)
    erase(router, this.service)

    app.use(`/api/${this.model.resource}`, router)
  }
}

export default RouteBuilder
