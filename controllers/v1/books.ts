import { BooksService } from '../../services/data/_index.ts'


// @desc    Get all books
// @route   GET /api/v1/books
const getAll = async ({ response } : { response : any }) => {
    response.status = 200
    response.body = {
        success: true,
        data: await BooksService.getAllBooks()
    }
}


// @desc    Get single book details
// @route   GET /api/v1/books/:id
const getBook = async ({ params, response }: { params: { id: string }, response: any }) => {
    const book = await BooksService.getBookDetails(params.id)

    if (book) {
        response.status = 200
        response.body = {
            success: 200,
            data: book
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            data: null
        }
    }

    
}


// @desc    Add a Book
// @route   POST /api/v1/books
const addBook = async ({ request, response }: { request: any, response: any }) => {
    const body = await request.body()

    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            data: null,
            message: 'Bad data payload'
        }
    } else {
        const data = await body.value

        const { success, book } = await BooksService.addBook(data)

        if (success) {
            response.status = 201
            response.body = {
                success: true,
                data: book,
                message: 'Book added successfully'
            }
        } else {
            response.status = 500
            response.body = {
                success: false,
                data: null,
                message: 'Failed to add book'
            }
        }

    }
}


export default {
    get: {
        'books': getAll,
        'books/:id': getBook
    },
    post: {
        'books': addBook
    }
}