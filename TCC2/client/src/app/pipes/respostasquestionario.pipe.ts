import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'respostasquestionarioPipe'
})
export class RespostasquestionarioPipe implements PipeTransform {

  transform(questionarios: any, digitado?: any): any {
    return questionarios.filter(questionarios => questionarios.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
