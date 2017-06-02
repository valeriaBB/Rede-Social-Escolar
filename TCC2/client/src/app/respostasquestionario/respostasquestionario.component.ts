import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerService } from 'app/services/server/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-respostasquestionario',
  templateUrl: './respostasquestionario.component.html',
  styleUrls: ['./respostasquestionario.component.css']
})
export class RespostasquestionarioComponent implements OnInit {

  public questionarios: Array<any> = [];
  public id: string;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private service: ServerService) {
    this.route = route;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }

  ngOnInit() {
    this.service.getAny2(this.id, 'questionario_usuario/').subscribe(res => {
      this.questionarios = res;
    })
  }

}
