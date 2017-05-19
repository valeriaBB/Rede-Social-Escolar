import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder,  FormsModule} from '@angular/forms';


@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  public questionarios: Array<any> = [];

  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getAny('questionario').subscribe(res => {
      this.questionarios = res;
    })
  }

   public remove(questionario: any) {
    var url = 'questionario/';
    var self = this;
    this.service.remove(questionario, url).subscribe(function () {
      self.questionarios = self.questionarios.filter(c => c._id != questionario._id)
    });
  }

}
