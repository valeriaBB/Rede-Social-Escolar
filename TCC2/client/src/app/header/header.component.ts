import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: ServerService) {
    
   }

  ngOnInit() {
    
  }

  public sair (event){
    this.service.sair();
  }

}
