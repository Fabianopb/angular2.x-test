import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'string') {
      return new DatePipe('fi').transform(value, 'd.M.yyyy');
    }
    return '';
  }

}
