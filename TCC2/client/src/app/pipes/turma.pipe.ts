import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turmaPipe'
})
export class TurmaPipe implements PipeTransform {

   transform(turma: any, digitado?: any): any {
    return turma.filter( turma => turma.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
