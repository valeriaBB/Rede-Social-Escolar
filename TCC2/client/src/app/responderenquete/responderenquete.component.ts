import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-responderenquete',
  templateUrl: './responderenquete.component.html',
  styleUrls: ['./responderenquete.component.css']
})
export class ResponderenqueteComponent implements OnInit {
 formCadastro: FormGroup;
  enquete = {};
  resposta1 = false;
  resposta2 = false;
  resposta3 = false;
  resposta4 = false;
  resposta5 = false;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService, fb: FormBuilder) {
    this.formCadastro = fb.group({});
    var self = this;
    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
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
     if (this.resposta1 == true) 
      this.enquete["resposta1"] = true;
    if (this.resposta2 == true)
      this.enquete["resposta2"] = true;
    if (this.resposta3 == true) 
      this.enquete["resposta3"] = true;
    if (this.resposta4 == true)
      this.enquete["resposta4"] = true;
      if (this.resposta5 == true)
      this.enquete["resposta5"] = true;
    this.service.salvar(this.enquete, 'enquete')
      .subscribe(() => {
        this.router.navigate(['/principal']);
      }, erro => console.log(erro));
  };

  public buscaEnqueteEditavel(id: string) {
    return this.service.editar(id, 'enquete/');
  }

}
