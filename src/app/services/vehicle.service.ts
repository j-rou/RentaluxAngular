import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from "rxjs";
import {VehicleModel} from "../models/vehicle.model";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private readonly _apiUrl = "http://localhost:8080";
  constructor(private _client : HttpClient) {}

  // En type script le type de retour est indiqué apres les () =>  methode (param) : type de retour{}

  getAll ( ) : Observable<VehicleModel[]>/*(**)*/{

    //// OU ecrire as <Observable<Vehicle[]>> apres (**)
    return <Observable<VehicleModel[]>>this._client.get(this._apiUrl + "/vehicle/getall");

  }


}
