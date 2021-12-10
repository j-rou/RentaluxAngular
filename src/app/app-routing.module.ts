import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import {HomeComponent} from "./components/home/home.component";
import {DropSiteComponent} from "./components/drop-site/drop-site.component";
import {SecondHandComponent} from "./components/second-hand/second-hand.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {ManagementComponent} from "./components/management/management.component";
import {CreateAccountComponent} from "./components/create-account/create-account.component";
import {LoggedGuard} from "./guard/logged.guard";
import {NotLoggedGuard} from "./guard/not-logged.guard";
import {LoggedAsAdminGuard} from "./guard/logged-as-admin.guard";
import {LoggedAsUserGuard} from "./guard/logged-as-user.guard";

const routes: Routes = [
  { path: 'createaccount', component: CreateAccountComponent, canActivate:[NotLoggedGuard]},
  { path: 'userprofile', component: UserProfileComponent, canActivate:[LoggedAsUserGuard]},
  { path: 'management', component: ManagementComponent, canActivate:[LoggedAsAdminGuard]},
  { path: 'secondhand', component: SecondHandComponent},
  { path: 'dropsite', component: DropSiteComponent},
  { path: 'vehicle', component: VehicleComponent},
  { path: 'login', component: LoginComponent, canActivate:[NotLoggedGuard]},
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // parce que c'est le principal, on y décrit les routes racines
  exports: [RouterModule]
})
export class AppRoutingModule { }
