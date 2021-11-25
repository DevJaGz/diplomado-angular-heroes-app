import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculasPersonalizado'
})
export class MayusculaPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log(value);
    console.log(args);

    return value.toUpperCase();
  }

}
