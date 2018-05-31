import { Component, OnInit } from '@angular/core';
import {Movie} from '../Movie'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies = new Array<Movie>();
  constructor() { }

  ngOnInit() {
  }
  removeMovie(index) {
    this.movies.splice(index, 1);
  }
}
