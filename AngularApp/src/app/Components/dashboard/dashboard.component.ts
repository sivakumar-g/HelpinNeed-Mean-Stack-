import { NavigationComponent } from './../navigation/navigation.component';
import { help } from './../../model/help';
import { HelpService } from './../../services/help.service';
import { DataService } from 'src/app/services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription , Observable , Unsubscribable , Subject  } from 'rxjs';
import { take } from 'rxjs/operators';

/*interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}*/


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit , OnDestroy {


  subscription: Subscription ;
  subs2: Subscription;
Coordinates: any;
private ngunsubscribe: Subject<any> = new Subject();

users: any;
substitute: any;


elements: any = [
  {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
  {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
  {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
];

headElements = ['ID', 'First', 'Last', 'Handle'];


  constructor(private dataService: DataService , private helpService: HelpService, private modalService: NgbModal) {

  }

ngOnInit() {

 this.start();
 // console.log('1st dashboard test');

  }// ngoninit




 start() { // ngon
  this.subs2 = this.dataService.currentMessage$
  .subscribe(
Coordinates => { // start
  // console.log('2nd dashboard test');
  // console.log(Coordinates ); // + 'coordinatess');
  // console.log('coordinatess before grt data');

  if (Coordinates) {
    this.getdata();
}
}// end
  ); // dataservice subscribe

}// ngoff




getdata() {
   console.log('hi from getdata at top');
   console.log(this.users); // + ' users at get dqta top');
   this.subscription = this.helpService.getDashboardData(this.Coordinates)// post request
  .subscribe(data => {
     this.users = data;
 //   console.log(this.users);

 // console.log(' users at getdata bot');
     });

}





openNavigationModal(user) {
  const modalRef = this.modalService.open(NavigationComponent,
    {
      scrollable: true,
      // windowClass: 'myCustomModalClass',
      // keyboard: false,
      // backdrop: 'static'
    });
  let  data = {
    latitude1: user.location.coordinates[0],
    longitude1: user.location.coordinates[1],
    address1: user.location.address,
  };

  modalRef.componentInstance.fromParent = data;

}









ngOnDestroy()  {
    if (this.subscription) {
    this.subscription.unsubscribe();
    }

    if (this.subs2) {
    this.subs2.unsubscribe();
    }
    console.log('..........................');

  }


}// class


