import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Turbine} from "../models/turbine.model";
import {GroupService} from "./group.service";

@Injectable({
  providedIn: 'root'
})
export class TurbinesService extends GroupService {

  public baseApiUrl = 'https://solvann.azurewebsites.net/api/Turbines';

  getTurbines(): Observable<Turbine[]> {
    return this.http.get<Turbine[]>(this.baseApiUrl + '/', {headers: this.createAuthorizationHeader()}).pipe();
  }
}
