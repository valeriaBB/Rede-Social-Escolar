import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Escola: any = false;
  Professor: any = false;
  Master: any = false;
  Aluno: any = false;
  Responsavel: any = false;
  tipo?: any;

  constructor(private service: ServerService) {
    this.tipo = this.service.verificaTipo();
    switch (this.tipo) {
      case 1:
        this.Master = true;
        this.Escola = false;
        this.Professor = false;
        this.Aluno = false;
        this.Responsavel = false;
        break;
      case 2:
        this.Master = false;
        this.Escola = true;
        this.Professor = false;
        this.Aluno = false;
        this.Responsavel = false;
        break;
      case 3:
        this.Master = false;
        this.Escola = false;
        this.Professor = true;
        this.Aluno = false;
        this.Responsavel = false;
        break;
      case 4:
        this.Master = false;
        this.Escola = false;
        this.Professor = false;
        this.Aluno = true;
        this.Responsavel = false;
        break;
      case 5:
        this.Master = false;
        this.Escola = false;
        this.Professor = false;
        this.Aluno = false;
        this.Responsavel = true;
        break;
    }
  }

  ngOnInit() {
  }

  public sair(event) {
    this.service.sair();
  }
}
