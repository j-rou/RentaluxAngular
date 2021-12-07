import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VehiculeModel} from "../../models/vehicule.model";

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  vehiculeListFromVehicule : VehiculeModel[] = [];


  ngOnInit(): void {
  }

  reactToChildren($event: VehiculeModel[]) {
        this.vehiculeListFromVehicule = $event;

  }

}
