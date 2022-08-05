import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PowerpriceService {

  public baseApiUrl = 'https://solvann.azurewebsites.net/api/PowerPrice';

  constructor(private http: HttpClient) {
  }

  getPowerPrice(): Observable<string> {
    return this.http.get<string>(this.baseApiUrl + '/').pipe();
  }

  getPowerPriceHistory(): Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/all').pipe();
  }
}
