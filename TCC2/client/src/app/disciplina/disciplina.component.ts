import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  public disciplinas: Array<any> = [];

  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getAny('disciplina').subscribe(res => {
      this.disciplinas = res;
    })
  }

   public remove(disciplina: any) {

    var url = 'disciplina/';
    var self = this;

    this.service.remove(disciplina, url).subscribe(function () {
      self.disciplinas = self.disciplinas.filter(c => c._id != disciplina._id)
    });
  }

}
