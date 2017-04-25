import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import Chart from 'chart.js'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public enquetes: Array<any> = [];
  public grafico = new Chart({
    
  });

  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getAny('enquete').subscribe(res => {
      this.enquetes = res;
    })
  }

}
