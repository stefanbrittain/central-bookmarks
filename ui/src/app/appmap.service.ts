import { Injectable, Output, EventEmitter } from '@angular/core';
//import { Headers, Http } from '@angular/http';
import { AppMap } from './appmap';
import { AppMessage } from './appMessage';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppMapService {
  @Output('systemMessage:') systemMessage: EventEmitter<any> = new EventEmitter();

  private serviceUrl = 'http://192.168.0.105:8081';
  constructor(/*private http: Http, */private httpClient:HttpClient) { }


  getStatus():Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/status');
  }


  getMaps(queryString : string): Observable<AppMap[]> {
    return this.httpClient.get(this.serviceUrl + "/search?q=" + queryString);
  }

  setMap(keyword : string, value : string): Observable<AppMap> {
    return this.httpClient.get(this.serviceUrl + "/set?k=" + keyword + "&v=" + value);
  }

  removeMap(keyword : string): Observable<any> {
    return this.httpClient.get(this.serviceUrl + "/remove?k=" + keyword);
  }

  processError(err: any): AppMessage {
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      return new AppMessage(false,"Error " + err.error.message);
    } else {
      return new AppMessage(false,"Backend returned code " + err.status + " body was: " + err.error);
    }
  }
}
