// @desc    Get all books
// @route   GET /api/v1/books
const getAll = ({ response } : { response : any }) => {
    response.body = 'Hello from All Books API Hello'
}


export default {
    get: {
        'books': getAll
    }
}