import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from './Movie'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(movies: Movie[], currentSearchTerm: string): Movie[] {
    if (!movies) { return []; }
    if (!currentSearchTerm) { return movies; }

    currentSearchTerm = currentSearchTerm.toLowerCase();

    return movies.filter( it => {
      return it.title.toLowerCase().includes(currentSearchTerm);
    });
  }
}

