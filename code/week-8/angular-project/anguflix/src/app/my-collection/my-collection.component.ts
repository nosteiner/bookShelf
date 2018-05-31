import { Component, OnInit } from '@angular/core';
import {Movie}from '../Movie'

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  movies = new Array<Movie>();
  constructor() { }

  ngOnInit() {
  }

}
