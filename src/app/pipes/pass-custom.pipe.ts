import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passCustom'
})
export class PassCustomPipe implements PipeTransform {

  transform(value: string | number, hide: boolean): string | number {
    return hide ? value.toString().replace(/./g, '*') : value;
  }

}
