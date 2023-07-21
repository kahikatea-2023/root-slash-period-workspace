import { InferModel } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const Album = sqliteTable('albums', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(), // Name of the album
  author: text('author').notNull(), // Name of the author
  yearOfRelease: integer('yearOfRelease').notNull(), // Year of release
  genre: text('genre').notNull(),
  price: integer('price').notNull(), // Price of the album
  completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
  image: text('image').notNull(), // URL of the album image
})

export type Album = InferModel<typeof Album>
