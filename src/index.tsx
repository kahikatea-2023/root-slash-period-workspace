import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { db } from './db'
import { Todo, todos } from './db/schema'
import { eq } from 'drizzle-orm'

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) =>
    html(
      <BaseHtml>
        <body hx-get="/home" hx-swap="innerHTML" hx-trigger="load" />
      </BaseHtml>
    )
  )

  .get('/home', async () => {
    return <Header />
  })

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
  .get('/styles.css', () => Bun.file('./tailwind-gen/styles.css'))
  .listen(3000)

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(`Bun!`)
  },
})

console.log(`Listening on http://localhost:${server.port}...`)

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

// -----Header------ JSX header component

function Header() {
  return (
    <div>
      {/* Main Header */}
      <div class="bg-[#ef4136] w-screen flex flex-row items-end justify-between">
        <img
          class=" w-80 h-16"
          src="https://github.com/kahikatea-2023/root-slash-period-workspace/blob/73bfc0907ba057104d0d3c533a4efed6433d8d1f/src/public/header.png?raw=true"
          alt="Marbecks logo"
        />
        <h1 class="text-white font-bold ">
          NEW ZEALAND’S LEADING MUSIC SPECIALIST
        </h1>
      </div>
      <div class="w-full flex justify-between">
        {/* Sub Header */}
        <ul class="flex flex-row items-end justify-evenly text-[#ef4136] font-bold space-x-4">
          <li>Classical</li>
          <li>Pop & Jazz</li>
          <li>DVD</li>
          <li>Vinyl</li>
          <li>Contact Us</li>
        </ul>

        {/* Search Header */}
        <ul class="flex flex-row items-end space-x-4">
          <li>My Account</li>
          <li>Cart</li>
          <li>Checkout</li>
        </ul>
      </div>
    </div>
  )
}

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
// }

// function TodoList({ todos }: { todos: Todo[] }) {
//   return (
//     <div>
//       {todos.map((todo) => (
//         <TodoItem {...todo} />
//       ))}
//       <TodoForm />
//     </div>
//   )
// }
