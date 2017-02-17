import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enquetePipe'
})
export class EnquetePipe implements PipeTransform {

   transform(enquete: any, digitado?: any): any {
    return enquete.filter( enquete => enquete.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
