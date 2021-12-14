import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {SessionService} from "../services/session/session.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor( private router: Router, private _sessionService: SessionService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if( this._sessionService.isLogged() ){
      return true;
    }
    else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }


}
