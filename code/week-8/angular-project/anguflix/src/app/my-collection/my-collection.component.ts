import { Component, OnInit } from '@angular/core';
import {Movie}from '../Movie'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  movies = new Array<Movie>();

  constructor(private moviesService : MoviesService) { 
    this.movies = moviesService.getMyCollection()
  }

  ngOnInit() {
  }

}
