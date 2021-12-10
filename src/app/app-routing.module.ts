import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import {HomeComponent} from "./components/home/home.component";
import {DropSiteComponent} from "./components/drop-site/drop-site.component";
import {SecondHandComponent} from "./components/second-hand/second-hand.component";

const routes: Routes = [

  { path: 'secondhand', component: SecondHandComponent},
  { path: 'dropsite', component: DropSiteComponent},
  { path: 'vehicle', component: VehicleComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // parce que c'est le principal, on y décrit les routes racines
  exports: [RouterModule]
})
export class AppRoutingModule { }
