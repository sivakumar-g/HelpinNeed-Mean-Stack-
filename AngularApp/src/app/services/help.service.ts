import { help } from './../model/help';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders , HttpParams } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map  } from 'rxjs/operators';
import { Subscription , Observable , Unsubscribable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private http: HttpClient) { }

  createhelp(help) {

    return this.http.post<any>('http://localhost:3000/helps/newhelp', help );


}

getDashboardData(Coordinates) {


  return this.http.post<any>('http://localhost:3000/helps/gethelpdata/', Coordinates);
/*
  let params = new HttpParams();
  params = params.append('latitude', Coordinates.latitude);
  params = params.append('longitude' , Coordinates.longitude);
*/
// return this.http.get<any>('http://localhost:3000/helps/gethelpdata/'  );//, {params});


  // return this.http.get<any>('http://localhost:3000/helps/gethelpdata/', { });
}

}
