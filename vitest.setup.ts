// vitest.setup.ts
import { beforeAll, afterAll } from 'vitest'
import { client } from './database_access.js'

// Connect to the real MongoDB instance before running tests
beforeAll(async () => {
  await client.connect()
})
 
// Close the MongoDB connection after all tests complete
afterAll(async () => {
  await client.close()
})
