import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder,  FormsModule} from '@angular/forms';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.component.html',
  styleUrls: ['./responsavel.component.css']
})
export class ResponsavelComponent implements OnInit {
  
  public responsaveis: Array<any> = [];

  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getAny('responsavel').subscribe(res => {
      this.responsaveis = res;
    })
  }

   public remove(responsavel: any) {

    var url = 'responsavel/';
    var self = this;

    this.service.remove(responsavel, url).subscribe(function () {
      self.responsaveis = self.responsaveis.filter(c => c._id != responsavel._id)
    });
  }

}
