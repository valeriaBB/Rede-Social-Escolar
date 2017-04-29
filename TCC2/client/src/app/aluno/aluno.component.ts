import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder,  FormsModule} from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public alunos: Array<any> = [];

  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getAlunos().subscribe(res => {
      this.alunos = res;
    })
  }

   public remove(aluno: any) {

    var url = 'aluno/';
    var self = this;

    this.service.remove(aluno, url).subscribe(function () {
      self.alunos = self.alunos.filter(c => c._id != aluno._id)
    });
  }

}
