import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DropSiteModel} from "../models/dropSite.model";

@Injectable({
  providedIn: 'root'
})
export class DropSiteService {


  private readonly _apiUrl = "http://localhost:8080";
  constructor(private _client : HttpClient) {}

  // En type script le type de retour est indiqué apres les () =>  methode (param) : type de retour{}

  getAll ( ) : Observable<DropSiteModel[]>/*(**)*/{

    //// OU ecrire as <Observable<Vehicule[]>> apres (**)
    return <Observable<DropSiteModel[]>>this._client.get(this._apiUrl + "/dropsite/getall");

  }




}
