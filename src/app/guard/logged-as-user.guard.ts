import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from "../services/session/session.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedAsUserGuard implements CanActivate {

  constructor( private router: Router, private _sessionService: SessionService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log("is logged: " +this._sessionService.isLogged()  )
    console.log("type: " + this._sessionService.getTypeOfConnectedUser()  )
    if( this._sessionService.isLogged() && this._sessionService.getTypeOfConnectedUser()=='user'){
      return true;
    }
    else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }

}
