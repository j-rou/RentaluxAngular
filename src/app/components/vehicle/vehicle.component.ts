import { Component, OnInit } from '@angular/core';
import {VehicleModel} from "../../models/vehicle.model";

@Component({
  selector: 'app-Vehicle',
  templateUrl: './Vehicle.component.html',
  styleUrls: ['./Vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicleListFromVehicle : VehicleModel[] = [];


  ngOnInit(): void {
  }

  reactToChildren($event: VehicleModel[]) {
    this.vehicleListFromVehicle = $event;
  }


}
