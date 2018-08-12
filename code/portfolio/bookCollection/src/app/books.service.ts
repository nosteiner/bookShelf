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

  constructor(private http: HttpClient) {
    this.booksObservable = this.booksSubject.asObservable();
  }


  getBooks(): void {
    let userId = '103202065418740874149'
    let bookshelfId = '1001'

    let Observable = this.http.get<Array<Book>>('https://www.googleapis.com/books/v1/users/' + userId + '/bookshelves/' + bookshelfId + '/volumes')
    Observable.subscribe((data) => {
      this.books = this.createBooksArray(data);
      this.booksSubject.next(this.books)
    }

    )
  }
 

  createBooksArray(data) {
   let i = 0;
    return data.items.map((book) => {
     
      let newBook = {
        id: i,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.author,
        year: book.volumeInfo.publishedDate,
        img: book.volumeInfo.imageLinks.thumbnail
      }
      i++;
      console.log(newBook)
      return newBook
    })
    
  }

}
