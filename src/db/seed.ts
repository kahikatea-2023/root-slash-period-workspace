import { albums } from './schema'
import { db } from './index'
import data from '../../albums.json'

async function seed() {
  await db.delete(albums).run()
  await db
    .insert(albums)
    .values(data.albums.map((album, id) => ({ ...album, id: id + 1 })))
    .returning()
    .get()
  const rows = await db.select().from(albums).all()
  console.log(rows)
}

seed()
