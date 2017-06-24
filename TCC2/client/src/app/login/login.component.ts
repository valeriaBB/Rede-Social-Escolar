import { AppComponent } from './../app.component';
import { Observable } from 'rxjs';
import { UsuarioComponent } from './../usuario/usuario.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server/server.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Erro: any = false;
  usuario = {
    email: "",
    senha: ""
  };

  constructor(private router: Router, private service: ServerService) {

  }

  ngOnInit() {
  }

  autenticar(event) {
    event.preventDefault();


    var objUsuario = {
      email: this.usuario.email,
      senha: this.usuario.senha
    };

    this.service.login(objUsuario).subscribe(res => {
      this.service.usuarioLogado(res._id, res.nome, res.email, res.tipo);
      this.service.redirect(res.tipo);
    }, err => {
      this.Erro = true;
      this.usuario.email = '';
      this.usuario.senha = '';
      console.log(err)
    })
  };
}
