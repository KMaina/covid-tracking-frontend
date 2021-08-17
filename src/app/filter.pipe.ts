import { Pipe, PipeTransform } from '@angular/core';
import { Results } from 'src/app/results'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(results: Results[], searchText: string) {
  }
}