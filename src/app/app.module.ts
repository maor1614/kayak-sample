import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { Err404Component } from './components/err404/err404.component';
import { FlightDetailComponent } from './components/flight-detail/flight-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FlightsComponent,
    HotelsComponent,
    Err404Component,
    FlightDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
