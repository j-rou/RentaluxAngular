import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CredentialsModel} from "../../models/credentials.model";
import {LoginSuccessModel} from "../../models/loginSuccess.model";
import {Router} from "@angular/router";
import {ProfileModel} from "../../models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  private readonly _apiUrl = "http://localhost:8080";

  private readonly _jwtKey = "api-jwt";
  private readonly _usernameKey = "connectedUser";
  private readonly _userTypeKey = "connectedUserType";


  constructor(private _router: Router, private _client : HttpClient) { }

  login( credentials: CredentialsModel) {

    const obsLogin = this._client.post(this._apiUrl+'/login', credentials) as Observable<LoginSuccessModel>;
    obsLogin.subscribe({
      next: responseLogin => {
        sessionStorage.setItem(this._jwtKey, responseLogin.jwt);
        sessionStorage.setItem(this._usernameKey, responseLogin.username);
        sessionStorage.setItem(this._userTypeKey, responseLogin.userType);
      },
      error:()=>{
        alert("Erreur critique dans le sessionService au niveau du login")
      },
      complete:()=> {
      console.log("Login successful")
      }
    })
    return obsLogin;
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



}
