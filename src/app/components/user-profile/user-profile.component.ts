import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ProfileService} from "../../services/session/profile.service";
import {SessionService} from "../../services/session/session.service";
import {ProfileModel} from "../../models/profile.model";


function nonBlank(control: AbstractControl): ValidationErrors | null {
  if( control.value != null && (control.value as string).trim().length != 0  )
    return null;

  return {
    'emptyField': 'Le champ est vide'
  }
}


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile : ProfileModel | undefined;

  constructor(private _profileService : ProfileService, private _sessionService : SessionService) { }

  ngOnInit(): void {
    this.getProfile();
  }


  getProfile() {
    this._profileService.getByUsername(this._sessionService.getConnectedUser()).subscribe({
      next : profile => {
        console.log(profile.lastname);
        this.profile = profile;
      },
      error : () =>{ alert ("Erreur à la récupération du profil ! ");
      }
    })
  }



}



