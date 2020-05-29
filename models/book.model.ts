import { Author } from './author.model.ts'

export interface Book {
    _id: string,
    name: string,
    author: Author,
    year: number,
    isbn?: string
}