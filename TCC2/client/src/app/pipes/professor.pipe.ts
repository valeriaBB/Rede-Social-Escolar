import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'professorPipe'
})
export class ProfessorPipe implements PipeTransform {

   transform(professor: any, digitado?: any): any {
    return professor.filter( professor => professor.nome.toLowerCase().includes(digitado.toLowerCase()));
  }

}
