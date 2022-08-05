import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WaterinfluxService {

  public baseApiUrl = 'https://solvann.azurewebsites.net/api/WaterInflux';

  constructor(private http: HttpClient) {
  }

  getWaterInflux(): Observable<string> {
    return this.http.get<string>(this.baseApiUrl + '/').pipe();
  }

  getWaterInfluxHistory(): Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/all').pipe();
  }
}
