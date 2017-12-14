import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentVotesToolTip'
})
export class PercentVotesToolTipPipe implements PipeTransform {

  transform(percent: number, loyal: number, total: number): string {
    return `<div class="toolTip">
        ${percent.toFixed(1) + '%'}
        <span class="toolTipText">
          ${loyal} votes with party<br>
          ${total} votes in total
        </span>
      </div>`;
  }

}
