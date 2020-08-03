import { Router } from '@angular/router';
import { GoogleMapsComponent } from './../google-maps/google-maps.component';
import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';


interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private dataService: DataService,
    private router: Router,

  ) {
    this.coordinates = {} as Coordinates;

    this.sampledata = {} as Coordinates;
  }

  title = 'angularmapsmodal';

  coordinates: Coordinates;
  sampledata: Coordinates;

   helpdata = {
  address :  'sample address',
   longitude : -110.8571443,
  latitude : 32.4586858
  };
  ngOnInit() { }
  /*
  : void {
    throw new Error('optional method');
  }
*/
  openGoogelMapsModal() {
    const modalRef = this.modalService.open(GoogleMapsComponent,
      {
        scrollable: true,
        // windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
    let  data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    };

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      this.coordinates = result;
    }, (reason) => {
    });
  }


sendDashboard() {

this.dataService.sendMessage(this.helpdata); // (this.coordinates); // helpdata
// console.log(this.helpdata);
if (this.helpdata.address === 'sample address') {

} // if

  }





}
