import { Router } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(http: Http) {

  }
  
  ngOnInit() {
   
  }

}
