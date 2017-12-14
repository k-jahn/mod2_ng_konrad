import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: string, url: string): string {
    return `<a href="${url}" target="_blank">
        ${value}
      </a>`;
  }
}
