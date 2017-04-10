import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Alternativa } from '../../models/Alternativa';

@Component({
  selector: 'app-cadastroenquete',
  templateUrl: './cadastroenquete.component.html',
  styleUrls: ['./cadastroenquete.component.css']
})

export class CadastroenqueteComponent implements OnInit {

  formCadastro: FormGroup;
  enquete = {};
  tipoAcao = "Cadastrar";
  public alternativa = new Alternativa(5);

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(40), Validators.minLength(3)])]],
      pergunta: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]],
      alternativa: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]]
    });

    var self = this;

    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.tipoAcao = "Editar";
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
  }

  salvar(event) {
    console.log(this.alternativa);
    this.alternativa['titulo'] = this.alternativa.titulo;
    this.service.salvar(this.enquete, 'enquete')
      .subscribe(() => {
        this.router.navigate(['/enquete']);
      }, erro => console.log(erro));
  };

  public buscaEnqueteEditavel(id: string) {
    return this.service.editar(id, 'enquete/');
  }

}
