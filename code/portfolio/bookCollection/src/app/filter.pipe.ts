import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './Book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], currentSearchTerm): Book[] {

    if (!books) { return []; }
    if (!currentSearchTerm) { return books; }
    if (typeof currentSearchTerm === "string") {

      currentSearchTerm = currentSearchTerm.toLowerCase();

      return books.filter(element => {

        return element.title.toLowerCase().includes(currentSearchTerm);
      });
    }

    // if (typeof currentSearchTerm === "number") {
    //   return books.filter(element => {
    //     if ((element.year === currentSearchTerm) === true)
    //       return it;
    //   });
    // }
  }
 

}
