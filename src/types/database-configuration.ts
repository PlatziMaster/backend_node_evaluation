/**
 * Interface to the database related configuration.
 */
export interface DatabaseConfiguration {
  driver: string
  user: string
  password: string
  name: string
  host: string
  port: number
  protocol: string
}
