import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from '../services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastroescola',
  templateUrl: './cadastroescola.component.html',
  styleUrls: ['./cadastroescola.component.css']
})
export class CadastroescolaComponent implements OnInit {

  formCadastro: FormGroup;
  public mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  escola = {};
  tipoAcao = "Cadastrar";

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {

    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],

      estado: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],

      cidade: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],

      bairro: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],

      rua: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],

      numero: ['', [Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(1)])]],

      email: ['', [Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(5)])]],

      senha: ['', [Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(4)])]],
      
      telefone: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6)])]],

    });


    var self = this;

    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
        this.buscaEscolaEditavel(id)
          .subscribe(
          res => self.escola = res.json(),
          erro => console.log(erro)
          );
      }
    });

    this.http = http;
  }

  ngOnInit() {
  }

  salvar(event) {
    this.service.salvar(this.escola, 'escola')
      .subscribe(() => {
        this.router.navigate(['/escola']);
      }, erro => console.log(erro));
  };

  public buscaEscolaEditavel(id: string) {
    return this.service.editar(id, 'escola/');
  }

}
