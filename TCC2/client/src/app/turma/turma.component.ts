import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder,  FormsModule} from '@angular/forms';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  public turmas: Array<any> = [];

  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getAny('turma').subscribe(res => {
      this.turmas = res;
    })
  }

   public remove(turma: any) {

    var url = 'turma/';
    var self = this;

    this.service.remove(turma, url).subscribe(function () {
      self.turmas = self.turmas.filter(c => c._id != turma._id)
    });
  }

}
