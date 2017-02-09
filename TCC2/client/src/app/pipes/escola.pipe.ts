import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escolaPipe'
})
export class EscolaPipe implements PipeTransform {

   transform(escola: any, digitado?: any): any {
    return escola.filter( escola => escola.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
