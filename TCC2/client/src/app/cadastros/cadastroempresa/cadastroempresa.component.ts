import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-cadastroempresa',
  templateUrl: './cadastroempresa.component.html',
  styleUrls: ['./cadastroempresa.component.css'],
})
export class CadastroempresaComponent implements OnInit {

  formCadastro : FormGroup;
  public mask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  empresa = {};
  tipoAcao = "Cadastrar";

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    
     this.formCadastro = fb.group({
       nome: ['', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])]], 
       email:[ '', [Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(5)])]],  
       senha:[ '', [Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(4)])]], 
       telefone:[ '', [Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6)])]], 
       contabilidade: [ '', [Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(3)])]] 

    });
    
    
    var self = this;

    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
        this.buscaEmpresaEditavel(id)
          .subscribe(
          res => self.empresa = res.json(),
          erro => console.log(erro)
          );
      }
    });

    this.http = http;
  }

  ngOnInit() {
  }

  salvar(event) {
    this.service.salvar(this.empresa, 'empresa')
      .subscribe(() => {
        this.router.navigate(['/empresa']);
      }, erro => console.log(erro));
  };

  public buscaEmpresaEditavel(id: string) {
    return this.service.editar(id, 'empresa/');
  }

}
