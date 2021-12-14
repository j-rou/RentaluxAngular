import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfileModel} from "../../models/profile.model";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private readonly _apiUrl = "http://localhost:8080";
  constructor(private _client : HttpClient) {}


  getByUsername(username: string) {
    return <Observable<ProfileModel>>this._client.get(this._apiUrl + "/profile/getbyusername?username="+ username);

  }


}
