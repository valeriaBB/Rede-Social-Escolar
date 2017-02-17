import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder,  FormsModule} from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public empresas: Array<any> = [];

  constructor(private service: ServerService) { 
  }

  ngOnInit() {
    this.service.getAny('empresa').subscribe(res => {
      this.empresas = res;
    })
  }

   public remove(empresa: any) {

    var url = 'empresa/';
    var self = this;

    this.service.remove(empresa, url).subscribe(function () {
      self.empresas = self.empresas.filter(c => c._id != empresa._id)
    });
  }

}
