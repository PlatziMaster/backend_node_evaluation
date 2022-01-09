import dotenv from 'dotenv'
import { ApplicationConfiguration } from '../types/application-configuration'

dotenv.config()

/**
 * Establish the application related configuration based on the environment
 * variables.
 *
 * @defaultValue
 *   name: 'myApplication'
 *   host: '127.0.0.1' aka 'localhost'
 *   port: 3000
 */
export const application: ApplicationConfiguration = {
  name: process.env.APP_NAME || 'myApplication',
  host: process.env.APP_HOST || '127.0.0.1',
  port: Number(process.env.APP_PORT) || 3000,
}
