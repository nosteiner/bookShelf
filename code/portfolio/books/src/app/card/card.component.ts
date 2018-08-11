import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() book: Book = new Book
  ngOnInit() {
  }

}
