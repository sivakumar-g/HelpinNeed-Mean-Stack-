import { HelpService } from './../../services/help.service';
import { GoogleMapsComponent } from './../google-maps/google-maps.component';
import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {Router} from '@angular/router';



interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})


export class HelpComponent implements OnInit {

  name: string;
  title: string;
  description: string;
  contact: string;

  coordinates: Coordinates;

  constructor(
    private modalService: NgbModal,
    private helpService: HelpService,
    public router: Router

  ) {
    this.coordinates = {} as Coordinates;
  }
  ngOnInit() {
  }

  openGoogelMapsModal() {
    const modalRef = this.modalService.open(GoogleMapsComponent,
      {
        scrollable: true,
        // windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
    const  data = {
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




  onRegisterSubmit() {
    const help = {
      name: this.name,
      title: this.title,
      description: this.description,
      contact: this.contact,
     location: {
       type: 'Point',
      coordinates:  [ this.coordinates.longitude, this.coordinates.latitude],

      // [-110.8571443 , 32.4586858],
      address: ' sample address',
    },

    // this.coordinates.address,
};

    this.helpService.createhelp(help).subscribe(data => {
        console.log(data);

        if(data.success == true)
        {alert('Added Successfully!... Hope You Get Help Soon');
         this.router.navigate(['/']);
        }
        if(data.success == false){
          alert('Please Pick Location !');
        }
      //console.log(this.coordinates.longitude);
      // need to add to users object reference array

});

  } // registersubmit
 /// router.navigate(['home']);

}
