import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Alternativa } from '../../models/Alternativa';
import { Respondem } from '../../models/Respondem';

@Component({
  selector: 'app-cadastroenquete',
  templateUrl: './cadastroenquete.component.html',
  styleUrls: ['./cadastroenquete.component.css']
})

export class CadastroenqueteComponent implements OnInit {

  formCadastro: FormGroup;
  enquete = {};
  tipoAcao = "Cadastrar";
  public alternativa1 = new Alternativa();
  public alternativa2 = new Alternativa();
  public alternativa3 = new Alternativa();
  public alternativa4 = new Alternativa();
  public alternativa5 = new Alternativa();
  public respondem = new Respondem();


  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({
      nome: ['', [Validators.compose([Validators.required, Validators.maxLength(40), Validators.minLength(3)])]],
      pergunta: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]],
      alternativa1: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]],
      alternativa2: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]],
      alternativa3: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]],
      alternativa4: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]],
      alternativa5: ['', [Validators.compose([Validators.required, Validators.maxLength(60), Validators.minLength(3)])]]
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
    console.log("entrou no salvar");
    this.enquete['respondem.aluno'] = this.respondem.aluno;
    this.alternativa1['titulo'] = this.alternativa1.titulo;
    this.alternativa2['titulo'] = this.alternativa2.titulo;
    this.alternativa3['titulo'] = this.alternativa3.titulo;
    this.alternativa4['titulo'] = this.alternativa4.titulo;
    this.alternativa5['titulo'] = this.alternativa5.titulo;
    this.service.salvar(this.enquete, 'enquete')
      .subscribe(() => {
        this.router.navigate(['/enquete']);
      }, erro => console.log(erro));
  };

  public buscaEnqueteEditavel(id: string) {
    return this.service.editar(id, 'enquete/');
  }

}
