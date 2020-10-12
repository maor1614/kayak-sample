import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  flighDataBase: Flight[] = [
    {code: "CVB55",
      from: "TLV",
      to: "JFK",
      price: 345
    },
    {
      code: "CVB85",
      from: "AMS",
      to: "JFK",
      price: 745
    },

    {
      code: "CVB65",
      from: "AMS",
      to: "JFK",
      price: 645
    },

  ] 




  constructor() {}
}

interface Flight {
  code: string;
  from: string;
  to: string;
  price: number;
}
