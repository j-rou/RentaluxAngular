import {Component, Input, OnInit} from '@angular/core';
import {VehiculeModel} from "../../../models/vehicule.model";


@Component({
  selector: 'app-displaycars',
  templateUrl: './displaycars.component.html',
  styleUrls: ['./displaycars.component.css']
})
export class DisplaycarsComponent implements OnInit {
  listEmpty = true;

  @Input()
  vehiculeListFromDisplay : VehiculeModel[];

  constructor() {
    this.vehiculeListFromDisplay = [];
  }

  ngOnInit(): void {}

  display() {
    if(this.vehiculeListFromDisplay.length == 0){
      this.listEmpty = true;
    }
    else {
      this.listEmpty = false;
    }
  }

}
