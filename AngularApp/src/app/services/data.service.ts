
import { Injectable } from '@angular/core';
import { Subject  } from 'rxjs';

@Injectable()
export class DataService {

  private  messageSource = new Subject<any>();
  currentMessage$ = this.messageSource.asObservable();

  constructor() { }

  sendMessage(helpdata: any) {
    this.messageSource.next(helpdata);
  }

}
