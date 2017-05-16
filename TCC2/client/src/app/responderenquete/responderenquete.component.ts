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
  enquete = {};
  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService) {
    var self = this;
    this.route = route;
    this.route.params.subscribe(params => {
      var id = params['id'];

      if (id != undefined) {
        this.buscaEnquete(id)
          .subscribe(
          res => self.enquete = res.json(),
          erro => console.log(erro)
          );
      }
    });
    this.http = http;
    console.log(this.enquete);
    console.log(self.enquete);

  }

  ngOnInit() {
  }

  salvar(event) {
    this.service.salvar(this.enquete, 'enquete')
      .subscribe(() => {
        this.router.navigate(['/principal']);
      }, erro => console.log(erro));
  };

  public buscaEnquete(id: string) {
    return this.service.editar(id, 'enquete/');
  }

}
