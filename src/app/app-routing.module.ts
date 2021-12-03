import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'vehicule', component: VehiculeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // parce que c'est le principal, on y décrit les routes racines
  exports: [RouterModule]
})
export class AppRoutingModule { }
