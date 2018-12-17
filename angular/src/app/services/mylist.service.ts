import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MylistService {

  private arr = [
    "Bhadresh","Ramesh","Suresh","Rajesh","Naresh"
  ];

  constructor() { 

  }

  public getdata()
  {
    return this.arr; 
  }
}
