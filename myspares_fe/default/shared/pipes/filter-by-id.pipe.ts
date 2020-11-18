import { Pipe, PipeTransform } from '@angular/core';
// filter by id
@Pipe({
  name: 'filterById'
})
export class FilterByIdPipe implements PipeTransform {
  transform(items: Array<any>, id?) {
    return items.filter(item => item.id === id)[0];
  }
}
