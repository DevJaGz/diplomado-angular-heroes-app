import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {

  }

  transform(url: string): SafeResourceUrl {
    const id = "1";
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
