import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-responderenquete',
  templateUrl: './responderenquete.component.html',
  styleUrls: ['./responderenquete.component.css']
})

export class ResponderenqueteComponent implements OnInit {
  formCadastro: FormGroup;
  enquete = {};
  enquete_usuario = {};
  usuario = {};
  resposta1 = false;
  resposta2 = false;
  resposta3 = false;
  resposta4 = false;
  resposta5 = false;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({});
    var self = this;
    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.buscaEnqueteEditavel(id)
          .subscribe(
          res => self.enquete = res.json(),
          erro => console.log(erro)
          );
      }
    });
    this.http = http;
  }

  ngOnInit() {
    this.usuario["_id"] = ServerService.id_user;
  }

  salvar(event) {
    if (this.resposta1 == true) {
      this.enquete_usuario["resposta1"] = true;
      this.enquete_usuario["resposta2"] = false;
      this.enquete_usuario["resposta3"] = false;
      this.enquete_usuario["resposta4"] = false;
      this.enquete_usuario["resposta5"] = false;
    }else if (this.resposta2 == true) {
      this.enquete_usuario["resposta2"] = true;
      this.enquete_usuario["resposta1"] = false;
      this.enquete_usuario["resposta3"] = false;
      this.enquete_usuario["resposta4"] = false;
      this.enquete_usuario["resposta5"] = false;
    } else if (this.resposta3 == true) {
      this.enquete_usuario["resposta3"] = true;
      this.enquete_usuario["resposta1"] = false;
      this.enquete_usuario["resposta2"] = false;
      this.enquete_usuario["resposta4"] = false;
      this.enquete_usuario["resposta5"] = false;
    } else if (this.resposta4 == true) {
      this.enquete_usuario["resposta4"] = true;
      this.enquete_usuario["resposta1"] = false;
      this.enquete_usuario["resposta2"] = false;
      this.enquete_usuario["resposta3"] = false;
      this.enquete_usuario["resposta5"] = false;
    } else if (this.resposta5 == true) {
      this.enquete_usuario["resposta5"] = true;
      this.enquete_usuario["resposta1"] = false;
      this.enquete_usuario["resposta2"] = false;
      this.enquete_usuario["resposta3"] = false;
      this.enquete_usuario["resposta4"] = false;
    }
    var teste = ServerService.id_user.replace('"', "");
    var teste2 = teste.replace('"', "");
    this.enquete_usuario["id_usuario"] = teste2;
    this.enquete_usuario["id_enquete"] = this.enquete["_id"];
    this.enquete_usuario["pergunta"] = this.enquete["pergunta"];

    this.service.salvar(this.enquete_usuario, 'enquete_usuario')
      .subscribe(() => {
        this.router.navigate(['/principal']);
      }, erro => console.log(erro));
  };

  public buscaEnqueteEditavel(id: string) {
    return this.service.editar(id, 'enquete/');
  }

}
