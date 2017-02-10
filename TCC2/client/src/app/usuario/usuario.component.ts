import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder,  FormsModule} from '@angular/forms';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios: Array<any> = [];

  constructor(private service: ServerService) { }

  ngOnInit() {
     this.service.getUsuarios().subscribe(res => {
      this.usuarios = res;
  })
}

   public remove(usuario: any) {

    var url = 'usuario/';
    var self = this;

    this.service.remove(usuario, url).subscribe(function () {
      self.usuarios = self.usuarios.filter(c => c._id != usuario._id)
    });
  }

}
