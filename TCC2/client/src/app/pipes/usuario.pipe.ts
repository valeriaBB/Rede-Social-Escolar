import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarioPipe'
})
export class UsuarioPipe implements PipeTransform {

   transform(usuario: any, digitado?: any): any {
    return usuario.filter( usuario => usuario.nome.toLowerCase().includes(digitado.toLowerCase()));
  }


}
