import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import {Movie} from '../Movie'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

  export class CardComponent implements OnInit {

    constructor() { }
    @Input() movie : Movie = new Movie
    
    ngOnInit() {
    }
  
  }
