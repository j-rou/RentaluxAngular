import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Credentials} from "../models/credentials";
import {LoginSuccess} from "../models/loginSuccess";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  private readonly _usernameKey = "connectedUser";
  private readonly _jwtKey = "api-jwt";
  private readonly _apiUrl = "http://localhost:8080"


  constructor(private _client : HttpClient) { }

  login( credentials: Credentials ) {

    const obs = this._client.post(this._apiUrl+'/login', credentials) as Observable<LoginSuccess>;
    obs.subscribe({
      next: response => {
        sessionStorage.setItem(this._jwtKey, response.jwt);
        sessionStorage.setItem(this._usernameKey, response.username);
      }
    })
    return obs;

  }

  logout() {
    sessionStorage.removeItem(this._usernameKey);
    sessionStorage.removeItem(this._jwtKey);
  }

  isLogged(){

    const connectedUser = sessionStorage.getItem(this._usernameKey);
    return connectedUser != undefined;

  }

  getConnectedUser(): string {
    return sessionStorage.getItem(this._usernameKey) as string;
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
