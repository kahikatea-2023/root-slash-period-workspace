import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { db } from './db'
import { eq } from 'drizzle-orm'
import * as fs from 'fs'
import { Album, albums } from './db/schema'
import HomePage from './HomePage'
import Header from './Header'

const app = new Elysia()

  .use(html())
  .get('/', ({ html }) =>
    html(
      <BaseHtml>
        <body
          class="px-20"
          hx-get="/home"
          hx-swap="innerHTML"
          hx-trigger="load"
        />
      </BaseHtml>
    )
  )

  .get('/home', async () => {
    const getAllAlbums = await db.select().from(albums).all()
    return (
      <div>
        <Header />
        <SearchBar albums={getAllAlbums} />
        <HomePage />
      </div>
    )
  })

  .get('/search', async () => {
    return (
      <div>
        <Header />
        <SearchPage />
      </div>
    )
  })

  .get('/styles.css', () => Bun.file('./tailwind-gen/styles.css'))
  .listen(3000)

// {
//   body: t.Object({
//     content: t.String({ minLength: 1 }),
//   }),
// }

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(`Bun!`)
  },
})

console.log(`Listening on http://localhost:${server.port}...`)

// ----- BASE HTML ------
const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maia</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <link href="/styles.css" rel="stylesheet">
</head>

${children}
`

// -----SEARCH BAR ----

function SearchBar({ albums }: { albums: Album[] }) {
  return (
    <div>
      <h3>
        Search Albums
        <span class="htmx-indicator">
          <img src="/img/bars.svg" /> Searching...
        </span>
      </h3>
      <input
        class="form-control"
        type="search"
        name="search"
        placeholder="Begin Typing To Search Users..."
        hx-post="/home"
        hx-trigger="keyup changed delay:500ms, search"
        hx-target="#search-results"
        hx-indicator=".htmx-indicator"
      />

      <table class="table">
        <thead>
          <tr>
            <th>name</th>
            <th>author</th>
            <th>yearOfRelease</th>
            <th>price</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody id="search-results"></tbody>
        <tr>
          {albums.map((album) => (
            <div>
              <td>{album.name}</td>
              <td>{album.author}</td>
            </div>
          ))}
        </tr>
      </table>
    </div>
  )
}

// -----SEARCH PAGE----

function SearchPage() {
  return <div>This is the search page</div>
}

// ------------ EXAMPLE FORMATTING FROM BOILERPLATE -------------------

/* // function TodoItem({ content, completed, id }: Todo) 
// function TodoItem({ content, completed, id }: Todo) {
//   return (
//     <div class="flex flex-row space-x-3">
//       <p>{content}</p>
//       <input
//         type="checkbox"
//         checked={completed}
//         hx-post={`/todos/toggle/${id}`}
//         hx-swap="outerHTML"
//         hx-target="closest div"
//       />
//       <button
//         class="text-red-500"
//         hx-delete={`/todos/${id}`}
//         hx-swap="outerHTML"
//         hx-target="closest div"
//       >
//         X
//       </button>
//     </div>
//   )
// } */

// .get('/todos', async () => {
//   const data = await db.select().from(todos).all()
//   return <TodoList todos={data} />
// })
// .post(
//   '/todos/toggle/:id',
//   async ({ params }) => {
//     const oldTodo = await db
//       .select()
//       .from(todos)
//       .where(eq(todos.id, params.id))
//       .get()
//     const newTodo = await db
//       .update(todos)
//       .set({ completed: !oldTodo.completed })
//       .where(eq(todos.id, params.id))
//       .returning()
//       .get()
//     return <TodoItem {...newTodo} />
//   },
//   {
//     params: t.Object({
//       id: t.Numeric(),
//     }),
//   }
// )

// .post(
//   '/todos',
//   async ({ body }) => {
//     const newTodo = await db.insert(todos).values(body).returning().get()
//     return <TodoItem {...newTodo} />
//   },
//   {
//     body: t.Object({
//       content: t.String({ minLength: 1 }),
//     }),
//   }
// )
