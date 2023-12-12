import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiroNome'
})
export class PrimeiroNomePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    let primeiroNome = "";

    for (let index = 0; index < value.length; index++) {

      if (value.substring (index,index+1) !== ' ') {
        primeiroNome += value.substring (index,index+1);
      } else {
        break;
      }

    }

    return primeiroNome;
  }

}
