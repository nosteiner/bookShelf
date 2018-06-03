import {Component, EventEmitter,Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  years = [
    {value: 1999},
    {value: 2003},
  ];
  @Output() searchEventEmmitter: EventEmitter<string> = new EventEmitter();
 @Input() textSearch: string;
 
  constructor() { }

  ngOnInit() {
  }
  searchMovieTitle(){
    this.searchEventEmmitter.emit(this.textSearch);
}
}
