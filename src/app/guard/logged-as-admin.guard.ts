import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from "../services/session/session.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedAsAdminGuard implements CanActivate {

  constructor( private router: Router, private _sessionService: SessionService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if( this._sessionService.isLogged() && this._sessionService.getTypeOfConnectedUser()=='admin'){
      return true;
    }
    else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }

}
