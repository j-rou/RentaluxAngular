import {Component, Input, OnInit} from '@angular/core';
import {VehicleModel} from "../../../models/vehicle.model";


@Component({
  selector: 'app-displaycars',
  templateUrl: './displaycars.component.html',
  styleUrls: ['./displaycars.component.css']
})
export class DisplaycarsComponent implements OnInit {

  @Input()
  vehicleListFromDisplay : VehicleModel[]=[];

  constructor() {}
  ngOnInit(): void {}

  bookVehicule(id : number) {
    console.log("\nRéservation de la voiture portant l'id : " + id );
  }
}
