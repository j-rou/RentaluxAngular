import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {SessionService} from "../services/session.service";

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {

  constructor( private router: Router, private _sessionService: SessionService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if( this._sessionService.isLogged() ){
      this.router.navigateByUrl("/home");
      return false;
    }
    else {
      return true;
    }
  }


}
