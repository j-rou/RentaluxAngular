import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {VehicleModel} from "../../../models/vehicle.model";
import {VehicleService} from "../../../services/vehicles/vehicle.service";
import {BrandModel} from "../../../models/brand.model";
import {UsageModel} from "../../../models/usage.model";
import {SessionService} from "../../../services/session/session.service";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  listEmpty = false;
  vehicleListFromFilter: VehicleModel[] = [];
  vehicleListFiltered: VehicleModel[] = [];

  availableBrandList: BrandModel[] = [];
  availableUsageList: UsageModel[] = [];
  availableModelList: string[] = [];

  requestedBrandList: BrandModel[] = [];
  requestedUsageList: UsageModel[] = [];
  requestedModelList: string[] = [];


  @Output() filterEvent: EventEmitter<VehicleModel[]>;

  constructor(private _vehicleService: VehicleService , private _sessionService : SessionService) {
    this.filterEvent = new EventEmitter<VehicleModel[]>();
  }


  ngOnInit(): void {
    this.listEmpty = true;

    /* Le service fournit un observable de tableau de Vehicle. */
    /* Une fonction flechée est executée lors que l'observable indique qu'il a recu quelque chose.  */
    /* tabVehicle est un parametre de cette fonction qui correspond a ce que recois l'observable */
    /* this._service.getAll().subscribe( tabVehicle =>this.listeVehicle = tabVehicle)  */

    /* Meme chose ci dessous, d'abbord on effectue NEXT. Si l'observable ne recoit aucun signal
    * alors on execute ERROR
    * Puis on eecute complete si NEXT est succesful
    * */
    this._vehicleService.getAll().subscribe({
      next: vehicleTab => {
        this.listEmpty = false;
        this.vehicleListFromFilter = vehicleTab;
        if (this.vehicleListFromFilter.length == 0) {
          this.listEmpty = true;
          console.log("La DB est accessible mais elle est vide.");
        }
        this.filterEvent.emit(this.vehicleListFromFilter);
      },
      error: () => {
        console.log("La DB est inaccessible.");
        alert("Impossible de se connecter à la base de donnée.");
      },
      complete: () => {
        console.log("DB Access Successful")
        this.fillUpAvailableList();
      }
    })

  }


  fillUpAvailableList() {

    this.vehicleListFromFilter.forEach(element => {
      /* On filtre le contenu de available list sur base de l'id. Si le resultat est vide, alors la brand n'est pas contenue dans la liste de brand */
      if (this.availableBrandList.filter(brand => (brand.id == element.brand.id)).length == 0) {
        this.availableBrandList.push(element.brand);
      }
      if (this.availableUsageList.filter(usage => (usage.id == element.usage.id)).length == 0) {
        this.availableUsageList.push(element.usage);

      }
    });

  }


  // LA MISE A JOUER DES DROPDOWN NE FONCTIONNE PAS AVEC DES OBEJTS
  // CI DESSOUS LES DEUX FONCTIONS AVEC DES STRING A LA PLACE ET CA MARCHE
  // reactToUsageCheck(brand : string) {}
  // reactToBrandCheck(brand : string) {}
  //

  reactToUsageCheck(usage: UsageModel) {
    let i = this.requestedUsageList.indexOf(usage);
    if (i == -1) {
      this.requestedUsageList.push(usage);
    } else {
      this.requestedUsageList.splice(i, 1);
    }

  }


  reactToBrandCheck(brand: BrandModel) {
    /* On réagis quand une coche de la dropdown Brand est selectionnée */
    /* Dans la liste des bands a filtrer, On tente de récuperer l'index qui correspond a la brand cochée */
    /* si c'est -1 alors la brand n'étais pas encore dans la liste donc on l'y ajoute */
    /* sinon la brande y était et donc on la supprime. (puisqu'on aura alors décoché) */
    let i = this.requestedBrandList.indexOf(brand);
    if (i == -1) {
      this.requestedBrandList.push(brand);
    } else {
      this.requestedBrandList.splice(i, 1);
    }

    /* ICI UPDATE LISTE DES MODELES */
    this.upDateModelDropdownList();

  }


  private upDateModelDropdownList() {
    this.availableModelList = [];
    // this.vehicleListFromFilter.forEach(element => {
    //   this.availableModelList.push(element.model);
    // })

    console.log("USAGE");
    console.log(this.requestedUsageList);
    console.log("Brand");
    console.log(this.requestedBrandList);


    this.requestedBrandList.forEach(brand => {
      this.vehicleListFromFilter.forEach(vehicle => {
        if (vehicle.brand.id == brand.id) {
          if (this.availableModelList.indexOf(vehicle.model) == -1) {
            this.availableModelList.push(vehicle.model);
          }
        }
      })
    })

    console.log("Model");
    console.log(this.requestedModelList);

  }


  reactToModelCheck(model: string) {
    let i = this.requestedModelList.indexOf(model);
    if (i == -1) {
      this.requestedModelList.push(model);
    } else {
      this.requestedModelList.splice(i, 1);
    }

  }


  displayRequested() {
    this.vehicleListFiltered = [];

    this.vehicleListFromFilter.forEach(element => {

      /* On filtre le contenu de requestModel sur base de l'id. Si le resultat est vide, alors la brand n'est pas contenue dans la liste de brand */
      if (this.requestedModelList.filter(model => (model == element.model)).length != 0
        && this.requestedBrandList.filter(brand => (brand.id == element.brand.id)).length != 0
        && this.requestedUsageList.filter(usage => (usage.id == element.usage.id)).length != 0
      ) {

        this.vehicleListFiltered.push(element);
      }

    });
    this.filterEvent.emit(this.vehicleListFiltered);
  }


  modelOfBrand(requestedBrand: BrandModel, availableModel: string) {
    let oneBrandVehicleList: VehicleModel[];
    let isFromBrand: boolean = false;
    oneBrandVehicleList = this.vehicleListFromFilter.filter(vehicle => (vehicle.brand.id == requestedBrand.id));

    oneBrandVehicleList.forEach(vehicle => {
      if (vehicle.model == availableModel) {
        isFromBrand = true;
      }
    })
    if (isFromBrand) {
      return true;
    } else {
      return false;
    }
  }



  isLoggedAsUser() {
    if(this._sessionService.getTypeOfConnectedUser()=='user') {
      return true;
    }
    else{return false;}
  }




}
