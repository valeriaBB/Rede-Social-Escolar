import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disciplinaPipe'
})
export class DisciplinaPipe implements PipeTransform {

   transform(disciplina: any, digitado?: any): any {
    return disciplina.filter( disciplina => disciplina.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
