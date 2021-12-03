import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

function nonBlank(control: AbstractControl): ValidationErrors | null {
  if( control.value != null && (control.value as string).trim().length != 0  )
    return null;

  return {
    'emptyField': 'Le champ est vide'
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    'username': new FormControl('', [Validators.required, nonBlank]),
    'password': new FormControl('', [Validators.required, nonBlank])
  })

  constructor( private _router: Router, private _sessionService: SessionService ) {
  }

  ngOnInit(): void {
  }

  onSubmit(){


    if( this.loginForm.valid ){

      this._sessionService.login( this.loginForm.value ).subscribe({
        next: () => {
          this._router.navigateByUrl('/home');
        },
        error: () => {
          this.loginForm.value.password = '';
          alert('identifiants invalides');
        }
      })

    }
  }

}
