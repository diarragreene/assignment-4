import { MongoClient, Db, Collection } from 'mongodb';
// We are importing the book type here, so we can keep our types consistent with the front end
import { type Book } from './adapter/assignment-3.js';

// Use test URI if provided by test setup (via global), otherwise use the real Mongo connection
const uri: string = (global as any).MONGO_URI ?? 'mongodb://mongo';

// Initialize the Mongo client
export const client = new MongoClient(uri);

// Function to access the database and the "books" collection
export interface BookDatabaseAccessor {
  database: Db;
  books: Collection<Book>;
}

export function getBookDatabase(): BookDatabaseAccessor {
  const dbName =
    (global as any).MONGO_URI !== undefined
      ? Math.floor(Math.random() * 100000).toPrecision() // use random DB name in tests
      : 'mcmasterful-books';

  const database = client.db(dbName);
  const books = database.collection<Book>('books');

  return {
    database,
    books,
  };
}
