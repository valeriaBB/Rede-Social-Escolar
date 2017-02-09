import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empresaPipe'
})
export class EmpresaPipe implements PipeTransform {

   transform(empresa: any, digitado?: any): any {
    return empresa.filter( empresa => empresa.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
