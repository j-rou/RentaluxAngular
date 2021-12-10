import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CredentialsModel} from "../models/credentials.model";
import {LoginSuccessModel} from "../models/loginSuccess.model";
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  private readonly _apiUrl = "http://localhost:8080";

  private readonly _jwtKey = "api-jwt";
  private readonly _usernameKey = "connectedUser";
  private readonly _userTypeKey = "connectedUserType";


  constructor(private _router: Router, private _client : HttpClient) { }

  login( credentials: CredentialsModel ) {

    const obs = this._client.post(this._apiUrl+'/login', credentials) as Observable<LoginSuccessModel>;
    obs.subscribe({
      next: response => {
        sessionStorage.setItem(this._jwtKey, response.jwt);
        sessionStorage.setItem(this._usernameKey, response.username);
        sessionStorage.setItem(this._userTypeKey, response.userType);

        // if(response.userType == "admin"){
        //   this._router.navigateByUrl('management');
        // }
        // else{
        //   this._router.navigateByUrl('userprofile');
        // }

      }

    })
    return obs;

  }

  logout() {
    sessionStorage.removeItem(this._usernameKey);
    sessionStorage.removeItem(this._jwtKey);
    sessionStorage.removeItem(this._userTypeKey);
  }

  isLogged(){

    const connectedUser = sessionStorage.getItem(this._usernameKey);
    return connectedUser != undefined;

  }

  getConnectedUser(): string {
    return sessionStorage.getItem(this._usernameKey) as string;
  }

  getTypeOfConnectedUser(): string {
    return sessionStorage.getItem(this._userTypeKey) as string;
  }


  getApiKey(): string{
    return sessionStorage.getItem(this._jwtKey) as string;
  }



  // signup( toAdd: User ){
  //
  //   if( this._usersList.find(e => e.username == toAdd.username) )
  //     throw 'this username is already taken';
  //
  //   this._usersList.push(toAdd);
  // }

}
