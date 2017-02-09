import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

 public escolas: Array<any> = [];

  constructor(private service: ServerService) { 
  }

  ngOnInit() {
    this.service.getEscolas().subscribe(res => {
      this.escolas = res;
    })
  }

   public remove(escola: any) {

    var url = 'escola/';
    var self = this;

    this.service.remove(escola, url).subscribe(function () {
      self.escolas = self.escolas.filter(c => c._id != escola._id)
    });
  }


}
