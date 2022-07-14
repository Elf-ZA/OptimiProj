import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  transform(list: any, searchText: string) {
    
    if (!list) {
      return [];
    }
    if (!searchText) {
      return list;
    }
    const value = list.toLowerCase().replace(
      searchText.toLowerCase(),
      `<a style='background-color:yellow;font-style:italic'>${searchText}</a>`
    );
   // console.log('value', value);

    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
