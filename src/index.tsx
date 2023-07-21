import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { db } from './db'
import { Todo, todos } from './db/schema'
import { eq } from 'drizzle-orm'

const app = new Elysia()

  // ----- BASE HTML ------
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
    return (
      <div>
        <Header /> <HomePage />
      </div>
    )
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

// ----- HOME ----- JSX
// pass information array as Data and map through items
function HomePage() {
  return (
    <div>
      <div class="flex flex-row items-start">
        <div class="w-2/12 m-2">
          <ul>
            <li class="bg-[#e7e1e4] ">Home</li>
            <li>Best Versions</li>
            <li>Boxed Sets</li>
            <li>Naxos 2023 releases</li>
            <li>Classical Award Winners</li>
            <li>Marbecks Collectables</li>
            <li>On Sale</li>
            <li>Hidden Treasures</li>
            <li>Rare & Collectable</li>
            <li>Must Watch!</li>
            <li>Gift Vouchers</li>
            <li>Accessories</li>
            <li>Storage</li>
            <li class="bg-[#e7e1e4] ">Info</li>
            <li>Info / Help</li>
            <li>Newsletters</li>
            <li>About Us</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div class="w-10/12 broder-1 border-solid border-[#dcd3d7] bg-[#f7f5f6]">
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-md font-medium m-1 p-1">
              New & Upcoming Releases
            </div>
            <div class="flex flex-row">
              <div class="bg-[#e7e1e4] w-1/2 m-1">
                <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                <p class="italic mb-1">12</p>
                <p>
                  An intimate collection of twelve compositions by Ryuichi
                  Sakamoto, written and recorded in Tokyo during...
                </p>
                <p>$25.00</p>
              </div>
              <div class="bg-[#e7e1e4] w-1/2 m-1">
                <h2 class="text-[#ef4136] font-medium">African Head Charge</h2>
                <p class="italic mb-1">A Trip To Bolgatanga</p>
                <p>
                  African Head Charge, the legendary collaboration between
                  master percussionist Bonjo Iyabinghi Noah and...
                </p>
                <p>$37.00</p>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="bg-[#e7e1e4] w-1/2 m-1">
                <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                <p class="italic mb-1">12</p>
                <p>
                  An intimate collection of twelve compositions by Ryuichi
                  Sakamoto, written and recorded in Tokyo during...
                </p>
                <p>$25.00</p>
              </div>
              <div class="bg-[#e7e1e4] w-1/2 m-1">
                <h2 class="text-[#ef4136] font-medium">African Head Charge</h2>
                <p class="italic mb-1">A Trip To Bolgatanga</p>
                <p>
                  African Head Charge, the legendary collaboration between
                  master percussionist Bonjo Iyabinghi Noah and...
                </p>
                <p>$37.00</p>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="bg-[#e7e1e4] w-1/2 m-1">
                <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                <p class="italic mb-1">12</p>
                <p>
                  An intimate collection of twelve compositions by Ryuichi
                  Sakamoto, written and recorded in Tokyo during...
                </p>
                <p>$25.00</p>
              </div>
              <div class="bg-[#e7e1e4] w-1/2 m-1">
                <h2 class="text-[#ef4136] font-medium">African Head Charge</h2>
                <p class="italic mb-1">A Trip To Bolgatanga</p>
                <p>
                  African Head Charge, the legendary collaboration between
                  master percussionist Bonjo Iyabinghi Noah and...
                </p>
                <p>$37.00</p>
              </div>
            </div>
            <div class="bg-[#e7e1e4] rounded-b-md  text-[#039] hover:text-[#4d1a80] m-1 p-1">
              » Explore More New Releases Here
            </div>
          </div>
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-md font-medium m-1 p-1">
              Reviewed In Viva
            </div>
            <div class="bg-[#e7e1e4] rounded-b-md text-[#039] hover:text-[#4d1a80] m-1 p-1">
              » Find Out More Here
            </div>
          </div>
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-md font-medium m-1 p-1">
              Upcoming Albums To Pre-order
            </div>
            <div class="bg-[#e7e1e4] rounded-b-md text-[#039] hover:text-[#4d1a80] m-1 p-1">
              » Explore More Albums On The Horizon Here
            </div>
          </div>
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-md font-medium m-1 p-1">
              New Jazz Arrivals
            </div>
            <div class="bg-[#e7e1e4] rounded-b-md text-[#039] hover:text-[#4d1a80] m-1 p-1">
              » Find more new and reissued Jazz albums here
            </div>
            <div>
              <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-md font-medium m-1 p-1">
                We Have Over 4000 LPs in Stock
              </div>
              <div class="bg-[#e7e1e4] rounded-b-md p-1 m-1 text-[#039] hover:text-[#4d1a80]">
                » Browse All Of Our In Stock Vinyl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* // function TodoItem({ content, completed, id }: Todo) 
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
}
