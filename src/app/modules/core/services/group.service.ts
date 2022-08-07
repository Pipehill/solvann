import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class GroupService {

  constructor(protected http: HttpClient) { }

  createAuthorizationHeader():HttpHeaders {
    let headers = new HttpHeaders()
      .set('GroupId', 'testgruppe')
      .set('GroupKey', 'p1uo+j67dk20h77XHf8LUg==');
    return headers;
  }


}
