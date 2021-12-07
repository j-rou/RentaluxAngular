import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehiculeService} from "../../../services/vehicule.service";
import {VehiculeModel} from "../../../models/vehicule.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  listEmpty = false;
  vehiculeListFromFilter : VehiculeModel[] = [];

  @Output() filterEvent : EventEmitter<VehiculeModel[]>;
  constructor(private _service : VehiculeService) {
    this.filterEvent = new EventEmitter<VehiculeModel[]> ();
  }


  ngOnInit(): void {
    this.listEmpty = true;

    /* Le service fournit un observable de tableau de vehicule. */
    /* Une fonction flechée est executée lors que l'observable indique qu'il a recu quelque chose.  */
    /* tabVehicule est un parametre de cette fonction qui correspond a ce que recois l'observable */
    /*    this._service.getAll().subscribe( tabVehicule =>this.listeVehicule = tabVehicule)  */

    /* Meme chose ci dessous, d'abbord on effectue NEXT. Si l'observable ne recoit aucun signal
    * alors on execute ERROR
    * Puis on eecute complete si NEXT est succesful */
    this._service.getAll().subscribe({
      next: vehiculeTab => {
        this.vehiculeListFromFilter = vehiculeTab;
        this.listEmpty = false;
        if (this.vehiculeListFromFilter.length == 0) {
          console.log("La DB est accessible mais la liste est vide.");
          this.listEmpty = true;
        }
      },
      error: () => {
        console.log("La DB est inaccessible.");
        alert("Impossible de se connecter à la base de donnée.");
        this.listEmpty = true;
      },
      complete: () => console.log("fini")
    })

  }


  checkRenault() {

  }

  checkFord() {

  }

  checkFiat() {

  }

  checkVW() {

  }

  checkUtil() {

  }

  checkLoisir() {

  }

  checkLuxe() {

  }

  checkEvent() {

  }


  onSubmit() {
    console.log("Filtrage");
  }
}
