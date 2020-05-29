import { Book } from '../../models/book.model.ts'

const firstBook: Book = {
    _id: 'kdlklhu-648478-ndjd',
    name: 'A Great Book to Read',
    author: {
        name: 'John Doe'
    },
    year: 2020
}

let count = 1

const BOOKS: Book[] = [
    firstBook
]


export default {
    // To get all the listed books
    getAllBooks: function(): Book[] {
        return BOOKS
    },

    // To Get a single book details
    getBookDetails: function(_id: string): Book | undefined {
        return BOOKS.find((book: Book) => book._id === _id);
    },

    // To add a book to the list
    addBook(book: Book) {
        if (BOOKS.push(book)) {
            return { succes: true, book }
        } else {
            return { success: false, book: null }
        }
    }
}