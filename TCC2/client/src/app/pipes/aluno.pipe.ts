import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alunoPipe'
})
export class AlunoPipe implements PipeTransform {

  transform(aluno: any, digitado?: any): any {
    return aluno.filter(aluno => aluno.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
