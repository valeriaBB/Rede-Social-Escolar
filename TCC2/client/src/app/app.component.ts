import { Router } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServerService } from "app/services/server/server.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(http: Http, private service: ServerService, private router: Router) {

  }

  ngOnInit() {

    this.service.relogin().subscribe(res => {
      this.service.usuarioLogado(res._id, res.nome, res.email, res.tipo);
      this.service.redirect(res.tipo);
    }, err => {
    });

  }

}
