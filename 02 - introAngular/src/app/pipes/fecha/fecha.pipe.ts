import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: string): string {
    let miFecha = new Date(value);

    return miFecha.getDate() + '-' + miFecha.getMonth() + '-' + miFecha.getFullYear();
  }

}
