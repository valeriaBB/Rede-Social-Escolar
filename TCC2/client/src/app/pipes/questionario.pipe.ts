import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionarioPipe'
})
export class QuestionarioPipe implements PipeTransform {

  transform(questionario: any, digitado?: any): any {
    return questionario.filter(questionario => questionario.nome.toLowerCase().includes(digitado.toLowerCase()));
  }
}
