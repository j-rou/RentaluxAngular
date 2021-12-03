import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicule} from "../../models/vehicule";

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  private _apiUrl = "http://localhost:8080/vehicule";

  constructor(private _client: HttpClient) { }

  getAll() : Observable<Vehicule[]>{
    return this._client.get( this._apiUrl ) as Observable<Vehicule[]>;
  }

  ngOnInit(): void {




  }


}
