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

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({});
     var self = this;
    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

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



}
