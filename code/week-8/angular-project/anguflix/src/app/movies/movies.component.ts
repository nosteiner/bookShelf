import { Component, OnInit } from '@angular/core';
import {Movie} from '../Movie'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  currentSearchTerm: string;
  movies = new Array<Movie>();
 
  
  constructor(private moviesService : MoviesService) {

  this.movies = moviesService.getMovies()
    
  }
  ngOnInit() {
    console.log(this.movies)
   
  }
  searchMovie(textSearch: string) {
    console.log(textSearch)
    this.currentSearchTerm = textSearch;
  }

  blockMovie() {
    
  }

  handleAddMovie(movie : Movie) {
    this.moviesService.addToMyCollection(movie);
  }
}
