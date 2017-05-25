import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-responderquestionario',
  templateUrl: './responderquestionario.component.html',
  styleUrls: ['./responderquestionario.component.css']
})
export class ResponderquestionarioComponent implements OnInit {

  formCadastro: FormGroup;
  questionario = {};
  questionario_usuario = {};
  usuario = {};

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({
      resposta1: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      resposta2: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      resposta3: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      resposta4: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]],
      resposta5: ['', [Validators.compose([Validators.required, Validators.maxLength(1000), Validators.minLength(3)])]]
    });
    var self = this;
    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];
      if (id != undefined) {
        this.buscaEditavel(id)
          .subscribe(
          res => self.questionario = res.json(),
          erro => console.log(erro)
          );
      }
    });
    this.http = http;
  }

  ngOnInit() {
    this.usuario["_id"] = ServerService.id_user;
  }

  public buscaEditavel(id: string) {
    return this.service.editar(id, 'questionario/');
  }

  public salvar(event) {
    var teste = ServerService.id_user.replace('"', "");
    var teste2 = teste.replace('"', "");
    this.questionario_usuario["id_usuario"] = teste2;
    this.questionario_usuario["id_questionario"] = this.questionario["_id"];
    this.questionario_usuario["nome"] = this.questionario["nome"];
    this.service.salvar(this.questionario_usuario, 'questionario_usuario')
      .subscribe(() => {
        this.router.navigate(['/principal']);
      }, erro => console.log(erro));
  }
}
