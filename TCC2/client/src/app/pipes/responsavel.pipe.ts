import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responsavelPipe'
})
export class ResponsavelPipe implements PipeTransform {

   transform(responsavel: any, digitado?: any): any {
    return responsavel.filter( responsavel => responsavel.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
