import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const [capitalizar] = args;
    return (capitalizar) ? value.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') : value;
  }

}
