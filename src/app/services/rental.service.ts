import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {VehicleModel} from "../models/vehicle.model";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: 'root'
})
export class RentalService {


  private readonly _apiUrl = "http://localhost:8080";
  constructor(private _client : HttpClient) {}

  // En type script le type de retour est indiqué apres les () =>  methode (param) : type de retour{}

  verifyDateScope (startDate : Date, endDate : Date, vehicleId : number  ) : Observable<boolean>{

    // let params = new HttpParams();
    // params.set("startDate",startDate.toString()) // TODO verif format
    // params.set("endDate",endDate.toString())
    // params.set("vehicleId",vehicleId)
    //
    // return <Observable<boolean>>this._client.get(this._apiUrl + "/location/vds", {
    //   params: params
    // });

    return <Observable<boolean>>this._client.get(this._apiUrl + "/location/vds?startDate="+startDate+"&endDate="+endDate+"&vehicleId="+vehicleId);
  }

  createRental(){}






}
