// Pipe that displays party Icon with toolTip
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partyIcon'
})
export class PartyIconPipe implements PipeTransform {

  transform(party: string): string {
    const out: any = function (text: string, imgUrl: string) {
        return `<span class="partySpan toolTip">
            <img src=${imgUrl}>
            <span class="toolTipText">
              ${text}
            </span>
          </span>`;
    };
    switch (party) {
        case 'D':
          return out('Democrat', 'assets/images/democrat.png');
        case 'R':
          return out('Republican', 'assets/images/republican.png');
        case 'I':
          return out('Independent', 'assets/images/independent.png');
        default:
          return party;
    }

  }

}
