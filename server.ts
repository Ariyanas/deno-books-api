import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const APP_PORT = 4000

const app = new Application()

const router = new Router()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/api/v1/books', ({ response } : { response : any }) => {
    response.body = 'Hello from Books API'
})

console.log(`SERVER running on PORT ${APP_PORT}`)

await app.listen({ port: APP_PORT })