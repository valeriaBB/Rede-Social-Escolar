import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public enquetes: Array<any> = [];
  public questionarios: Array<any> = [];

  constructor(private service: ServerService) { 
  }
  ngOnInit() {
    this.service.getAny('todasEnquetes').subscribe(res => {
      this.enquetes = res;
    });

    this.service.getAny('todosQuestionarios').subscribe(res => {
      this.questionarios = res;
    })
  }
}
