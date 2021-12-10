import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {VehicleComponent} from './components/vehicle/vehicle.component';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './components/home/home.component';
import {FilterComponent} from './components/vehicle/filter/filter.component';
import {DisplaycarsComponent} from './components/vehicle/displaycars/displaycars.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DropSiteComponent} from './components/drop-site/drop-site.component';
import { SecondHandComponent } from './components/second-hand/second-hand.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VehicleComponent,
    LoginComponent,
    HomeComponent,
    FilterComponent,
    DisplaycarsComponent,
    DropSiteComponent,
    SecondHandComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
