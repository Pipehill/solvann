import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SolarService {

  public baseApiUrl = 'https://solvann.azurewebsites.net/api/Solar';

  constructor(private http: HttpClient) {
  }

  getSolarProduction(): Observable<string> {
    return this.http.get<string>(this.baseApiUrl + '/').pipe();
  }

  getSolarProductionHistory(): Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/all').pipe();
  }

}
