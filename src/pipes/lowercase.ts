import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'QUALQUER-NOME'
})
export class Lowercase implements PipeTransform {
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
