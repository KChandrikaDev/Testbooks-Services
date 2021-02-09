import { Injectable } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BOOKS } from './../src/mock/books.mock';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
