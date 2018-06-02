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
  

  constructor(private moviesService : MoviesService) {

  this.movies = moviesService.getMovies()
    
  }
  ngOnInit() {
    console.log(this.movies)
  }

  blockMovie() {
    
  }

  handleAddMovie(movie : Movie) {
    this.moviesService.addToMyCollection(movie);
  }
}
