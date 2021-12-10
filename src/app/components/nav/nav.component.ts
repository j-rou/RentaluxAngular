import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private _sessionService: SessionService) { }

  ngOnInit(): void {
  }

  isLogged(){
    return this._sessionService.isLogged();
  }

  logOut(){
    this._sessionService.logout();
  }

}
