import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Movie } from '../Movie'
import { MoviesService } from '../movies.service';
import { MyCollectionComponent } from '../my-collection/my-collection.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  clicked = false;
  constructor(private moviesService: MoviesService) {

  }

  @Input() movie: Movie = new Movie
  @Output() selectedMovieEventEmitter: EventEmitter<Movie> = new EventEmitter();

  @Output() RemoveMovieEmitter: EventEmitter<Movie> = new EventEmitter();
  ngOnInit() {
  }

  addMovie(movie : Movie) {
    this.selectedMovieEventEmitter.emit(movie);
   this.clicked = true ;
  }

  removeMovieFromMyCollection(movie){
    this.RemoveMovieEmitter.emit(movie);
  }

}
