// Pipe that displays percent values with fixed accuracy
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    if (isNaN(value)) {
      return '--';
    }
    return (+value).toFixed(1) + '%';
  }

}
