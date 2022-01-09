import dotenv from 'dotenv'
import { DatabaseConfiguration } from '../types'

dotenv.config()

/**
 * Establish the databases related configuration based on the environment
 * variables.
 *
 * @defaultValue
 *   driver: 'mongodb'
 *   user: 'root'
 *   password: '' it means no password required
 *   name: 'myDatabase'
 *   host: '127.0.0.1' aka 'localhost'
 *   port: 27017
 *   protocol: 'mongodb'
 */
export const database: DatabaseConfiguration = {
  driver: process.env.DB_DRIVER || 'mongodb',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  name: process.env.DB_NAME || 'myDatabase',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 27017,
  protocol: process.env.DB_PROTOCOL || 'mongodb',
}
