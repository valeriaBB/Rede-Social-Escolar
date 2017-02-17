import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastroprofessor',
  templateUrl: './cadastroprofessor.component.html',
  styleUrls: ['./cadastroprofessor.component.css']
})
export class CadastroprofessorComponent implements OnInit {

  formCadastro: FormGroup;
  public mask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  professor = {};
  tipoAcao = "Cadastrar";

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],
      email: ['', [Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(5)])]],
      senha: ['', [Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(4)])]],
      formacao: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],
      idade: ['', [Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(1)])]],
      telefone: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6)])]]

    });

    var self = this;

    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
        this.buscaProfessorEditavel(id)
          .subscribe(
          res => self.professor = res.json(),
          erro => console.log(erro)
          );
      }
    });

    this.http = http;

  }

  ngOnInit() {
  }
  
  salvar(event) {
    this.service.salvar(this.professor, 'professor')
      .subscribe(() => {
        this.router.navigate(['/professor']);
      }, erro => console.log(erro));
  };

  public buscaProfessorEditavel(id: string) {
    return this.service.editar(id, 'professor/');
  }

}
