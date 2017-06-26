import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  public doughnutChartData:number[] = [20, 20, 20, 20, 20];
  public doughnutChartType:string = 'doughnut';
  
  constructor() {
   }

  ngOnInit() {
  }
  
}
