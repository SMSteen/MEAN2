import { Component, OnInit } from '@angular/core';

import { BOOKS } from '../../data/book-data';
import { Book } from '../../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = BOOKS;
  selectedBook: Book;
  constructor() {}

  ngOnInit() {}

  onSelect(book: Book) {
    console.log('selecting something', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  addBook(book: Book) {
    console.log('adding book', book);
    this.books.push(book);
  }
}
