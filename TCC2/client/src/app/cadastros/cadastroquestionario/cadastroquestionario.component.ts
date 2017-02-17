import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastroquestionario',
  templateUrl: './cadastroquestionario.component.html',
  styleUrls: ['./cadastroquestionario.component.css']
})
export class CadastroquestionarioComponent implements OnInit {

  formCadastro: FormGroup;
 
  questionario = {};
  tipoAcao = "Cadastrar";

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]]
    });

    var self = this;

    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
        this.buscaQuestionarioEditavel(id)
          .subscribe(
          res => self.questionario = res.json(),
          erro => console.log(erro)
          );
      }
    });

    this.http = http;

  }

  ngOnInit() {
  }
  
  salvar(event) {
    this.service.salvar(this.questionario, 'questionario')
      .subscribe(() => {
        this.router.navigate(['/questionario']);
      }, erro => console.log(erro));
  };

  public buscaQuestionarioEditavel(id: string) {
    return this.service.editar(id, 'questionario/');
  }

}
