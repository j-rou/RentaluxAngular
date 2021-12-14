import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VehicleService} from "../../services/vehicles/vehicle.service";
import {VehicleModel} from "../../models/vehicle.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentalService} from "../../services/rental.service";
import {SessionService} from "../../services/session/session.service";
import {ProfileModel} from "../../models/profile.model";
import {ProfileService} from "../../services/session/profile.service";


@Component({
  selector: 'app-rent-validation',
  templateUrl: './rent-validation.component.html',
  styleUrls: ['./rent-validation.component.css']
})
export class RentValidationComponent implements OnInit {

  vehicle : VehicleModel | null = null;
  vehicleIsAvailable: boolean | undefined ;
  profile : ProfileModel | undefined;
  rentalConfirmed: boolean = false ;

  rentForm: FormGroup = new FormGroup({
    'startDate': new FormControl('', [Validators.required]),
    'endDate': new FormControl('', [Validators.required])
  })


  constructor(private activatedRoute : ActivatedRoute,
              private _vehicleService : VehicleService,
              private _rentalService : RentalService,
              private _sessionService : SessionService,
              private _profileService : ProfileService
              ) {  }

  ngOnInit(): void {
    this._vehicleService.getOneById(this.activatedRoute.snapshot.params['vehicleId']).subscribe({
      next: vehicle => {
        this.vehicle = vehicle;
      },
      error:() => {
        this.vehicle = null;
      }

    });

  }

  validateRental() {
    if(this.vehicle) {

      this._rentalService.verifyDateScope(this.rentForm.value.startDate, this.rentForm.value.endDate, this.vehicle.id).subscribe({
        next: response => {
          this.vehicleIsAvailable = response;
        },
        error: () => {
          this.vehicleIsAvailable = false;
          alert("ERREUR CRITIQUE");
        },
        complete:()=>{
          this.getProfile();
        }
      })
    }
    this.vehicleIsAvailable = false;
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


  confirmRental() {
    this.rentalConfirmed = true;
  }

}
