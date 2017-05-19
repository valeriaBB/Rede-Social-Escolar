import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';
import { FormBuilder,  FormsModule} from '@angular/forms';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.css']
})
export class EnqueteComponent implements OnInit {

  public enquetes: Array<any> = [];

  constructor(private service: ServerService) { }

   ngOnInit() {
    this.service.getAny('enquete').subscribe(res => {
      this.enquetes = res;
    })
  }

   public remove(enquete: any) {
    var url = 'enquete/';
    var self = this;
    this.service.remove(enquete, url).subscribe(function () {
      self.enquetes = self.enquetes.filter(c => c._id != enquete._id)
    });
  }

}
