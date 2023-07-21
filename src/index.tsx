import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { db } from './db'
import { eq } from 'drizzle-orm'
import * as fs from 'fs'
import { Album } from './db/schema'

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
        <Header />
        <HomePage />
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

// ---------------- DB -------------- //

// ----- HOME ----- JSX
// pass information array as Data and map through items

function HomePage() {
  return (
    <div>
      <div class="flex flex-row items-start">
        <div class="w-1/12 m-2 text-sm">
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
        <div class="w-11/12 border border-solid border-[#dcd3d7] bg-[#f7f5f6]">
          {/* ----------------------------------- ROWS OF 2 ARTISTS ------------------------------------ */}
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-2 border border-solid border-[#dcd3d7]">
              New & Upcoming Releases
            </div>
            <div class="flex flex-row">
              <div class="bg-[#e7e1e4] w-1/2 border border-solid border-[#dcd3d7] flex m-2">
                <img
                  class="w-36 h-36 border border-white border-solid m-2"
                  src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                  alt="Ryuichi Sakamoto"
                />
                <div>
                  <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                  <p class="italic mb-1 text-sm">12</p>
                  <p class="text-sm">
                    An intimate collection of twelve compositions by Ryuichi
                    Sakamoto, written and recorded in Tokyo during...
                  </p>
                  <p class="text-sm">$25.00</p>
                </div>
              </div>
              <div class="bg-[#e7e1e4] w-1/2 border border-solid border-[#dcd3d7] flex m-2">
                <img
                  class=" w-36 h-36 border border-white border-solid m-2"
                  src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                  alt="Ryuichi Sakamoto"
                />

                <div>
                  <h2 class="text-[#ef4136] font-medium">
                    African Head Charge
                  </h2>
                  <p class="italic mb-1 text-sm">A Trip To Bolgatanga</p>
                  <p class="text-sm">
                    African Head Charge, the legendary collaboration between
                    master percussionist Bonjo Iyabinghi Noah and...
                  </p>
                  <p class="text-sm">$37.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------- ROWS OF 4 ARTISTS ------------------------------------ */}
          <div class="flex flex-row">
            <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
              <img
                class="w-36 h-36 border border-white border-solid m-2"
                src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                alt="Ryuichi Sakamoto"
              />
              <div class="text-sm">
                <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                <p class="italic mb-1">12</p>
                <p>$25.00</p>
              </div>
            </div>
            <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
              <img
                class=" w-36 h-36 border border-white border-solid m-2"
                src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                alt="Ryuichi Sakamoto"
              />

              <div class="text-sm">
                <h2 class="text-[#ef4136] font-medium">African Head Charge</h2>
                <p class="italic mb-1 ">A Trip To Bolgatanga</p>

                <p>$37.00</p>
              </div>
            </div>
            <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
              <img
                class=" w-36 h-36 border border-white border-solid m-2"
                src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                alt="Ryuichi Sakamoto"
              />
              <div class="text-sm">
                <h2 class="text-[#ef4136] font-sm">African Head Charge</h2>
                <p class="italic mb-1">A Trip To Bolgatanga</p>

                <p>$37.00</p>
              </div>
            </div>
            <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
              <img
                class=" w-36 h-36 border border-white border-solid m-2"
                src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                alt="Ryuichi Sakamoto"
              />

              <div class="text-sm">
                <h2 class="text-[#ef4136] font-medium">African Head Charge</h2>
                <p class="italic mb-1">A Trip To Bolgatanga</p>

                <p>$37.00</p>
              </div>
            </div>
          </div>

          <div>
            {/* ----------------------------------- ROWS OF 4 ARTISTS NEW STYLE ------------------------------------ */}
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-2 p-1  border border-solid border-[#dcd3d7]">
              Reviewed In Viva
            </div>
            <div>
              <div class="flex flex-row">
                <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
                  <img
                    class="w-36 h-36 border border-white border-solid m-2"
                    src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                    alt="Ryuichi Sakamoto"
                  />
                  <div class="text-sm">
                    <h2 class="text-[#ef4136] font-medium">Ryuichi Sakamoto</h2>
                    <p class="italic mb-1">12</p>
                    <p>$25.00</p>
                  </div>
                </div>
                <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
                  <img
                    class=" w-36 h-36 border border-white border-solid m-2"
                    src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                    alt="Ryuichi Sakamoto"
                  />

                  <div class="text-sm">
                    <h2 class="text-[#ef4136] font-medium">
                      African Head Charge
                    </h2>
                    <p class="italic mb-1 ">A Trip To Bolgatanga</p>

                    <p>$37.00</p>
                  </div>
                </div>
                <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
                  <img
                    class=" w-36 h-36 border border-white border-solid m-2"
                    src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                    alt="Ryuichi Sakamoto"
                  />
                  <div class="text-sm">
                    <h2 class="text-[#ef4136] font-sm">African Head Charge</h2>
                    <p class="italic mb-1">A Trip To Bolgatanga</p>

                    <p>$37.00</p>
                  </div>
                </div>
                <div class="bg-[#e7e1e4] w-1/4 border border-solid border-[#dcd3d7] flex m-2">
                  <img
                    class=" w-36 h-36 border border-white border-solid m-2"
                    src="https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Jldmlld3MvMjAyMy9yeXVpY2hpLXNha2Ftb3RvLTEyLXJhLXJlY29tbWVuZHMtY292ZXIuanBn"
                    alt="Ryuichi Sakamoto"
                  />

                  <div class="text-sm">
                    <h2 class="text-[#ef4136] font-medium">
                      African Head Charge
                    </h2>
                    <p class="italic mb-1">A Trip To Bolgatanga</p>

                    <p>$37.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-[#e7e1e4] rounded-b-sm text-[#039] hover:text-[#4d1a80] m-1 p-1 border border-solid border-[#dcd3d7]">
              » Find Out More Here
            </div>
          </div>
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-1 p-1 border border-solid border-[#dcd3d7]">
              Upcoming Albums To Pre-order
            </div>
            <div class="bg-[#e7e1e4] rounded-b-sm text-[#039] hover:text-[#4d1a80] m-1 p-1 border border-solid border-[#dcd3d7]">
              » Explore More Albums On The Horizon Here
            </div>
          </div>
          <div>
            <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-1 p-1 border border-solid border-[#dcd3d7]">
              New Jazz Arrivals
            </div>
            <div class="bg-[#e7e1e4] rounded-b-sm text-[#039] hover:text-[#4d1a80] m-1 p-1 border border-solid border-[#dcd3d7]">
              » Find more new and reissued Jazz albums here
            </div>
            <div>
              <div class="text-[#ef4136] bg-[#e7e1e4] rounded-t-sm font-bold m-1 p-1 border border-solid border-[#dcd3d7]">
                We Have Over 4000 LPs in Stock
              </div>
              <div class="bg-[#e7e1e4] rounded-b-sm p-1 m-1 text-[#039] hover:text-[#4d1a80] border border-solid border-[#dcd3d7]">
                » Browse All Of Our In Stock Vinyl
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

// -----Footer------ JSX footer component

function Footer() {
  return (
    <div>
      <div class="border border-solid border-[#dcd3d7] bg-[#f7f5f6] rounded-sm p-1 m-1 ">
        <h2 class="text-[#ef4136] font-bold">Marbecks Records Est. 1934</h2>
        <p>
          Marbecks Records is New Zealand’s leading music specialist store
          selling CD’s, DVD’s and Vinyl, catering not only to the connoisseurs
          of classical music, but more to what our customers want encompassing
          Jazz, Audio Books, World Music, International Film and interesting
          imports we think you will adore.
        </p>
        <p>
          Let’s face it… We are all passionate about music, and that’s why we’re
          here!
        </p>
        <p class="text-[#039] hover:text-[#4d1a80]">
          Read more about Marbecks Records...
        </p>
      </div>
    </div>
  )
}

{
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
}
