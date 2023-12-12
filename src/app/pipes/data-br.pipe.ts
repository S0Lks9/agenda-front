import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    return value.substring(8,10)+"/"+value.substring(5,7)+"/"+value.substring(0,4)+" "+value.substring(11,13)+":"+value.substring(14,16);
  }

}
