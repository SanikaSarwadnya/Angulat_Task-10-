import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersericesService {

  constructor() { }
  product_info=[

    {
      pid:121,
      pname:"book",
      price:100,
      qty:12

    },
    {
      pid:101,
      pname:"notebook",
      price:120,
      qty:10

    },
    {
      pid:111,
      pname:"pen",
      price:50,
      qty:20

    },
    {
      pid:103,
      pname:"pencile",
      price:40,
      qty:25

    }
  ]
}
