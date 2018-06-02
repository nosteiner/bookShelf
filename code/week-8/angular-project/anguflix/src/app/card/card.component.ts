import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Movie } from '../Movie'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  constructor(private moviesService: MoviesService) {

  }

  @Input() movie: Movie = new Movie
  @Output() selectedMovieEventEmitter: EventEmitter<Movie> = new EventEmitter();

  ngOnInit() {
  }

  addMovie(movie : Movie) {
    
    this.selectedMovieEventEmitter.emit(movie);
  }
}
