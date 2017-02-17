import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastroturma',
  templateUrl: './cadastroturma.component.html',
  styleUrls: ['./cadastroturma.component.css']
})
export class CadastroturmaComponent implements OnInit {

  formCadastro: FormGroup;
  turma = {};
  tipoAcao = "Cadastrar";

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],
      serie: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]]
    });

    var self = this;

    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
        this.buscaTurmaEditavel(id)
          .subscribe(
          res => self.turma = res.json(),
          erro => console.log(erro)
          );
      }
    });

    this.http = http;

  }

  ngOnInit() {
  }

  salvar(event) {
    this.service.salvar(this.turma, 'turma')
      .subscribe(() => {
        this.router.navigate(['/turma']);
      }, erro => console.log(erro));
  };

  public buscaTurmaEditavel(id: string) {
    return this.service.editar(id, 'turma/');
  }

}
