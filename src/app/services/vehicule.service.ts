import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from "rxjs";
import {VehiculeModel} from "../models/vehicule.model";

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private readonly _apiUrl = "http://localhost:8080";
  constructor(private _client : HttpClient) {}

  // En type script le type de retour est indiqué apres les () =>  methode (param) : type de retour{}

  getAll ( ) : Observable<VehiculeModel[]>/*(**)*/{

    //// OU ecrire as <Observable<Vehicule[]>> apres (**)
    return <Observable<VehiculeModel[]>>this._client.get(this._apiUrl + "/vehicule/getall");

  }


}
