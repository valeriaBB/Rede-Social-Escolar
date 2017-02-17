import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})
export class CadastrousuarioComponent implements OnInit {

   formCadastro: FormGroup;
 
  usuario = {};
  tipoAcao = "Cadastrar";

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {

    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],
      email: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],
      senha: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],
      tipo: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],
      formacao: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]],
      idade: ['', [Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(1)])]]
    });

    var self = this;

    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
        this.buscaUsuarioEditavel(id)
          .subscribe(
          res => self.usuario = res.json(),
          erro => console.log(erro)
          );
      }
    });

    this.http = http;
  }

  ngOnInit() {
  }

  salvar(event) {
    this.service.salvar(this.usuario, 'usuario')
      .subscribe(() => {
        this.router.navigate(['/usuario']);
      }, erro => console.log(erro));
  };

  public buscaUsuarioEditavel(id: string) {
    return this.service.editar(id, 'usuario/');
  }

}
