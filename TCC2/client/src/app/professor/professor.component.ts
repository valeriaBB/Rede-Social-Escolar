import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder,  FormsModule} from '@angular/forms';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  public professores: Array<any> = [];

  constructor(private service: ServerService) { }

  ngOnInit() {
     this.service.getAny('professor').subscribe(res => {
      this.professores = res;
    })
  }

  public remove(professor: any) {

    var url = 'professor/';
    var self = this;

    this.service.remove(professor, url).subscribe(function () {
      self.professores = self.professores.filter(c => c._id != professor._id)
    });
  }

}
