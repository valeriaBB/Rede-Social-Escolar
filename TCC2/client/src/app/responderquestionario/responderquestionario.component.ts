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
  respondeu: any = true;

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
      var id_resposta = ServerService.id_user.replace(/\"/g, "") + ',' + id;
        this.buscaResposta(id_resposta)
          .subscribe(
          //res => self.respondeu = (res),
          res => self.respondeu = (res.json()),
          erro => console.log(erro)
          );
          console.log(self.respondeu);

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
    this.questionario_usuario["id_usuario"] = ServerService.id_user.replace(/\"/g, "");
    this.questionario_usuario["id_questionario"] = this.questionario["_id"];
    this.questionario_usuario["nome_usuario"] = this.service.nome();
    this.questionario_usuario["nome"] = this.questionario["nome"];
    this.questionario_usuario["pergunta1"] = this.questionario["pergunta1"];
    this.questionario_usuario["pergunta2"] = this.questionario["pergunta2"];
    this.questionario_usuario["pergunta3"] = this.questionario["pergunta3"];
    this.questionario_usuario["pergunta4"] = this.questionario["pergunta4"];
    this.questionario_usuario["pergunta5"] = this.questionario["pergunta5"];
    this.service.salvar(this.questionario_usuario, 'questionario_usuario')
      .subscribe(() => {
        this.router.navigate(['/principal']);
      }, erro => console.log(erro));
  }
  public buscaResposta(id: string) {
     return this.service.editar(id, 'questionario_usuario/');
   }
}
