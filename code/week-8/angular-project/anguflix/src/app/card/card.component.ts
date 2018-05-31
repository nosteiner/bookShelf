import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import {Movie} from '../Movie'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  movie : Movie;
  constructor() { }

  ngOnInit() {
  }

  addToMyCollection(){
    
  }
}
