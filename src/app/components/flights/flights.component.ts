import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(public fs: FlightsService, public r: Router) { }

  ngOnInit(): void {
  }
  goToDetails(code) {
    console.log("You Clicked me ",code)
    this.r.navigateByUrl("flight/" +code)
    
  }

}
