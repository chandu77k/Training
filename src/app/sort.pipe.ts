import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], property: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!array || !property) return array;

    return array.sort((a, b) => {
      let valueA = a[property].toString().toLowerCase();
      let valueB = b[property].toString().toLowerCase();

      if (valueA > valueB) return order === 'asc' ? 1 : -1;
      if (valueA < valueB) return order === 'asc' ? -1 : 1;
      return 0;
    });
  }

}
