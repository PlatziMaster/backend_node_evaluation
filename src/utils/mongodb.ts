import { database } from '~/config'

/**
 * Generate a connection string with URI format based on the environment
 * variables.
 *
 * @returns A connection string.
 */
export const getConnectionString = (): string => {
  const protocol = encodeURIComponent(database.protocol)
  const user = encodeURIComponent(database.user)
  const pwd = encodeURIComponent(database.password)
  const host = encodeURIComponent(database.host)
  const port = encodeURIComponent(database.port)

  return `${protocol}://${user}:${pwd}@${host}:${port}?retryWrites=true&writeConcern=majority`
}
