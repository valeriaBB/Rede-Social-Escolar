import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100,450, 100];
  public doughnutChartType:string = 'doughnut';
  
  constructor() {
   }

  ngOnInit() {
  }

  // events
  
}
