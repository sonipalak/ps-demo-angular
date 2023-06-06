import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchPeople: string): any[] {
    if (!items || !searchPeople) {
      return items;
    }

    searchPeople = searchPeople.toLowerCase();
    return items.filter(item =>
        item.name.title.toLowerCase().includes(searchPeople) ||
        item.name.first.toLowerCase().includes(searchPeople) ||
        item.name.last.toLowerCase().includes(searchPeople) ||
        item.cell.toLowerCase().includes(searchPeople)
    );
  }
}
