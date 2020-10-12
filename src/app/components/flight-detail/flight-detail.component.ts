import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css'],
})
export class FlightDetailComponent implements OnInit {
  constructor(public acr: ActivatedRoute, public fs: FlightsService) {}

  flight;

  ngOnInit(): void {
    console.log(this.acr.snapshot.params.code);
    this.flight = this.fs.flighDataBase.find(
      (f) => f.code == this.acr.snapshot.params.code
    );
    
  }
}
