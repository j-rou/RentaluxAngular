import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { LoginComponent } from './components/login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/vehicule/filter/filter.component';
import { DisplaycarsComponent } from './components/vehicule/displaycars/displaycars.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { DropSiteComponent } from './components/drop-site/drop-site.component';
import { SecondHandComponent } from './components/second-hand/second-hand.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VehiculeComponent,
    LoginComponent,
    HomeComponent,
    FilterComponent,
    DisplaycarsComponent,
    DropSiteComponent,
    SecondHandComponent
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
