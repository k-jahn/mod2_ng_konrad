import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'years'
})
export class YearsPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    // english language number formater
    if (value === 0) {
        return 'none';
    }
    if (value === 1) {
        return value + ' year';
    }
    return value + ' years';
  }
}
