import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrodisciplina',
  templateUrl: './cadastrodisciplina.component.html',
  styleUrls: ['./cadastrodisciplina.component.css']
})
export class CadastrodisciplinaComponent implements OnInit {

  formCadastro: FormGroup;
  disciplina = {};
  tipoAcao = "Cadastrar";

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]]
    });

    var self = this;

    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
        this.buscaDisciplinaEditavel(id)
          .subscribe(
          res => self.disciplina = res.json(),
          erro => console.log(erro)
          );
      }
    });

    this.http = http;

  }

  ngOnInit() {
  }
  
  salvar(event) {
    this.service.salvar(this.disciplina, 'disciplina')
      .subscribe(() => {
        this.router.navigate(['/disciplina']);
      }, erro => console.log(erro));
  };

  public buscaDisciplinaEditavel(id: string) {
    return this.service.editar(id, 'disciplina/');
  }
}
