import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(users: Array<any>, prop?: any, order?: string): any {
    if (!prop) { return users; }
    users.sort( (a, b) => {
      return (a[prop] === b[prop]) ? 0 : (a[prop] < b[prop]) ? -1 : 1;
    });
    return order === 'desc' ? users.reverse() : users;
  }
}
