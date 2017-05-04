import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Opnião 1', 'Opinião 2','Opinião 3', 'Opinião 4'];
  public doughnutChartData:number[] = [350, 450, 100, 100];
  public doughnutChartType:string = 'doughnut';
  
  constructor() {
   }

  ngOnInit() {
  }

  // events
  
}
