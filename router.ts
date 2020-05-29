import { Router } from 'https://deno.land/x/oak/mod.ts'

import { BASE_API_ENDPOINT } from './config.ts'

import Controllers from './controllers/_index.ts'

const router = new Router()

// Routes Registration
await Controllers.register(router, BASE_API_ENDPOINT)

console.log(router)

export default router