import BooksController from './books.ts'

const CONTROLLERS = [
    BooksController
]

export default {
    register(router : any, base: string) {
        CONTROLLERS.forEach(routes => {
            Object.keys(routes).forEach((version: any) => {
                console.log(routes['v1'])
            })
        })
    }
}