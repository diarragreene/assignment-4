import { getBookDatabase } from '../database_access.js'
import { expect, test, afterEach } from 'vitest'
import { ObjectId } from 'mongodb'

test('it can fetch a book by ID', async () => {
  const { books } = getBookDatabase()

  const book = {
    _id: new ObjectId('64dfe330a14af22d7b4c3321'),
    name: 'Test Book',
    author: 'Test Author',
    description: 'Test Description',
    price: 10,
    image: 'test.jpg'
  }

  await books.insertOne(book)
  const found = await books.findOne({ _id: new ObjectId('64dfe330a14af22d7b4c3321') })

  expect(found?.name).toBe('Test Book')
})

// Optional: clear books after each test for isolation
afterEach(async () => {
  const { books } = getBookDatabase()
  await books.deleteMany({})
})
