import { Component, OnInit } from '@angular/core';
import {VehiculeModel} from "../../../models/vehicule.model";
import {VehiculeService} from "../../../services/vehicule.service";


@Component({
  selector: 'app-displaycars',
  templateUrl: './displaycars.component.html',
  styleUrls: ['./displaycars.component.css']
})
export class DisplaycarsComponent implements OnInit {
  listEmpty = false;

  constructor(private _service : VehiculeService) {
  }


  listeVehicule : VehiculeModel[] = [{
    id: 1,
    brand: "Toyota",
    model: "Prius",
    category:"Loisir"
  },{
    id: 2,
    brand: "Ford",
    model: "Focus",
    category:"Loisir"
  },{
    id: 3,
    brand: "Nissan",
    model: "Navara",
    category:"Utilitaire"
  },{
    id: 4,
    brand: "Opel",
    model: "Kapitan",
    category:"Event"
  }




  ];


  ngOnInit(): void {


    /* Le service fournit un observable de tableau de vehicule. */
    /* Une fonction flechée est executée lors que l'observable indique qu'il a recu quelque chose.  */
    /* tabVehicule est un parametre de cette fonction qui correspond a ce que recois l'observable */
    /*    this._service.getAll().subscribe( tabVehicule =>this.listeVehicule = tabVehicule)  */

    /* Meme chose ci dessous, d'abbord on effectue NEXT. Si l'observable ne recoit aucun signal
    * alors on execute ERROR
    * Puis on eecute complete si NEXT est succesful */
    this._service.getAll().subscribe({
      next: tabVehicule => {
        this.listeVehicule = tabVehicule;
        this.listEmpty = false;
        if(this.listeVehicule.length == 0){
          console.log("La DB est accessible mais la liste est vide.");
          this.listEmpty = true;
        }
      },
      error: () =>{
        console.log("La DB est inaccessible.");
        alert("Impossible de se connecter à la base de donnée.");
        this.listEmpty = true;
      },
      complete: () => console.log("fini")
    })

  }

}
