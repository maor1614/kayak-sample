import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Err404Component } from './components/err404/err404.component';
import { FlightDetailComponent } from './components/flight-detail/flight-detail.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { SampleGuard } from './guards/sample.guard';

const routes: Routes = [
  { path: 'flights', component: FlightsComponent },
  { path: 'flight/:code', component: FlightDetailComponent },
  { path: 'hotels', component: HotelsComponent, canActivate:[SampleGuard] },
  { path: 'about', redirectTo: 'flights' },
  { path: '', pathMatch: 'full', redirectTo: 'flights' },
  { path: "**" ,  component:Err404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
