import { Component, OnInit } from '@angular/core';
import {DropSiteModel} from "../../models/dropSite.model";
import {DropSiteService} from "../../services/drop-site.service";

@Component({
  selector: 'app-drop-site',
  templateUrl: './drop-site.component.html',
  styleUrls: ['./drop-site.component.css']
})
export class DropSiteComponent implements OnInit {

  listEmpty = false;

  constructor(private _service : DropSiteService) {
  }

  dropSiteList : DropSiteModel[] =[];
  // dropSiteList : DropSiteModel[] = [{
  //   id: 1,
  //   address: "Rue des fraises"
  // },{
  //   id: 2,
  //   address: "Rue des framboises"
  // },{
  //   id: 3,
  //   address: "Rue des bananes"
  // },{
  //   id: 4,
  //   address: "Rue des pommes"
  // }
  //
  // ];


  ngOnInit(): void {
    this.listEmpty = true;

    /* Le service fournit un observable de tableau de dropSite. */
    /* Une fonction flechée est executée lors que l'observable indique qu'il a recu quelque chose.  */
    /* tabDropSite est un parametre de cette fonction qui correspond a ce que recois l'observable */
    /*    this._service.getAll().subscribe( DropSiteTab =>this.dropSiteList = dropSiteList)  */

    /* Meme chose ci dessous, d'abbord on effectue NEXT. Si l'observable ne recoit aucun signal
    * alors on execute ERROR
    * Puis on eecute complete si NEXT est succesful */
    this._service.getAll().subscribe({
      next: dropSiteTab => {
        this.dropSiteList = dropSiteTab;
        this.listEmpty = false;
        if(this.dropSiteList.length == 0){
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
