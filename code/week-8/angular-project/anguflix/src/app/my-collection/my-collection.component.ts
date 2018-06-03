import { Component, OnInit } from '@angular/core';
import {Movie}from '../Movie'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  movies = Array<Movie>();
  // showselect:boolean=false;
  removeControll : boolean = false;
  currentSearchTerm: string;
  constructor(private moviesService : MoviesService) { 
    this.movies = moviesService.getMyCollection()
  }

  ngOnInit() {
  }

  searchMovie(textSearch: string) {
    this.currentSearchTerm = textSearch;
    console.log("noam"+this.currentSearchTerm)
  }
 
  remove(movie){
    this.moviesService.removeFromMyCollection(movie)
  }

  toggleRemove(){
    this.removeControll = !this.removeControll
  }
}
