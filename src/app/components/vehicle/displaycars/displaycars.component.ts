import {Component, Input, OnInit} from '@angular/core';
import {VehicleModel} from "../../../models/vehicle.model";
import {SessionService} from "../../../services/session/session.service";


@Component({
  selector: 'app-displaycars',
  templateUrl: './displaycars.component.html',
  styleUrls: ['./displaycars.component.css']
})
export class DisplaycarsComponent implements OnInit {

  @Input()
  vehicleListFromDisplay : VehicleModel[]=[];

  constructor(private _sessionService: SessionService) {}
  ngOnInit(): void {}


  isLoggedAsUser() {
    if(this._sessionService.getTypeOfConnectedUser()=='user') {
      return true;
    }
    else{return false;}
  }






}
