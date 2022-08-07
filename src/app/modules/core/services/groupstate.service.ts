import { Injectable } from '@angular/core';
import {GroupService} from "./group.service";
import {Observable} from "rxjs";
import {GroupState} from "../models/groupstate.model";

@Injectable({
  providedIn: 'root'
})
export class GroupstateService extends GroupService {
  public baseApiUrl = 'https://solvann.azurewebsites.net/api/GroupState';

  getGroupstate(): Observable<GroupState[]> {
    return this.http.get<GroupState[]>(this.baseApiUrl + '/', {headers: this.createAuthorizationHeader()}).pipe();
  }
}
