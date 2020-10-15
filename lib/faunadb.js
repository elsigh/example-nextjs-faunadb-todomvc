import faunadb from 'faunadb'

/** Alias to `faunadb.query` */
export const q = faunadb.query

/**
 * Creates an authenticated FaunaDB client
 * configured with the given `secret`.
 */
export function getClient(secret) {
  return new faunadb.Client({ secret })
}

/** FaunaDB Client configured with our server secret. */
export const client = getClient(process.env.FAUNADB_SERVER_SECRET)