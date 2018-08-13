import { Injectable } from '@angular/core';
import { Book } from './Book';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<Book>;
  booksSubject: Subject<Book[]> = new Subject<Book[]>();
  booksObservable: Observable<Book[]>;

  searchText: any;
  searchTextSubject: Subject<string> = new Subject<string>();
  searchTextObservable: Observable<string>;

  constructor(private http: HttpClient) {
    this.booksObservable = this.booksSubject.asObservable();
    this.searchTextObservable = this.searchTextSubject.asObservable();

  }


  getBooks(): void {
    let userId = '103202065418740874149'
    let bookshelfId = '1001'

    let Observable = this.http.get<Array<Book>>('https://www.googleapis.com/books/v1/users/' + userId + '/bookshelves/' + bookshelfId + '/volumes')
    Observable.subscribe((data) => {
      this.books = this.createBooksArray(data);
      this.booksSubject.next(this.books)
    })
  }


  createBooksArray(data) {

    return data.items.map((book) => {

      let bookData = {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        year: book.volumeInfo.publishedDate,
        img: book.volumeInfo.imageLinks.thumbnail,
        isNewBook: true
      }

      let newBook = new Book()
      newBook.initialize();
      newBook.edit(bookData);

      return newBook
    })
  }

  updateBooksArray(book: Book, isNewBook: Boolean) {
    if (isNewBook) {
      this.books.push(book)
    } else {
      let index = this.bookIndexById(book.id)
      this.books.splice(index, 1, book)
    }
    this.booksSubject.next(this.books)
  }

  removeBook(bookId) {
    let index = this.bookIndexById(bookId)
    this.books.splice(index, 1)
    this.booksSubject.next(this.books)
  }

  bookIndexById(bookId) {
    return this.books.findIndex((element) => {
      return element.id == bookId;
    });
  }

  sendSearchTextUpdates(searchText){
    this.searchTextSubject.next(searchText)
  }
}
