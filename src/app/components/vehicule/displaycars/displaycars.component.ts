import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehiculeModel} from "../../../models/vehicule.model";
import {VehiculeService} from "../../../services/vehicule.service";


@Component({
  selector: 'app-displaycars',
  templateUrl: './displaycars.component.html',
  styleUrls: ['./displaycars.component.css']
})
export class DisplaycarsComponent implements OnInit {
  listEmpty = true;

  @Input()
  vehiculeListFromDisplay : VehiculeModel[] = [];


  ngOnInit(): void {
      if(this.vehiculeListFromDisplay.length == 0){
        console.log("La DB est accessible mais la liste est vide.");
      }

  }





}
