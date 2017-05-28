import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';

@Component({
  selector: 'app-respostasquestionario',
  templateUrl: './respostasquestionario.component.html',
  styleUrls: ['./respostasquestionario.component.css']
})
export class RespostasquestionarioComponent implements OnInit {

  public questionarios: Array<any> = [];

  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getAny('questionario_usuario').subscribe(res => {
      this.questionarios = res;
      })
  }

}
