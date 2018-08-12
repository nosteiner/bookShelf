import { Component, OnInit } from '@angular/core';
import {Book} from '../Book'
import { BooksService } from '../books.service';


@Component({
  selector: 'app-cards-collection',
  templateUrl: './cards-collection.component.html',
  styleUrls: ['./cards-collection.component.scss']
})
export class CardsCollectionComponent implements OnInit {
  books = new Array<Book>();



  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.booksObservable.subscribe((data)=>{
      this.books = data;
    });
    this.booksService.getBooks();
  }

 

}
