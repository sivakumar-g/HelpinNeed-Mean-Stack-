import { Component, OnInit, ViewChild, ElementRef, NgZone, Input , AfterViewInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MouseEvent } from '@agm/core';

import { AgmDirectionModule} from 'agm-direction';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() fromParent;


  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit() {
   // console.log(this.fromParent.latitude1);
    this. getDirection();
  }




  name = 'Navigation';


  // initial center position
  lat: Number = 24.799448;
  lng: Number = 120.979021;
  zoom: Number = 14;
  latitude: number;
  longitude: number;
  address: string;


  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
      });
    }
  }



//Get Directions
  dir = undefined;
  public getDirection() {
    this.dir = {

     origin:  { lat: this.latitude, lng: this.longitude },
      destination: { lat: this.fromParent.latitude1, lng: this.fromParent.longitude1 }
    }
  }


  closeModal(sendData) {
    this.activeModal.close(sendData);
  }


}
