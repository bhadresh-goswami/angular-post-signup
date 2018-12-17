import { Component } from '@angular/core';
import { MylistService } from './services/mylist.service';

import {HttpClient} from '@angular/common/http';

import {Countrymodel} from './models/countrymodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arr:string[] = [];
  arrCountries:string[] = [];
  countryList:Countrymodel[];
  constructor(private myserve:MylistService, private httpClient:HttpClient){
    //this.arr = myserve.getdata();

   // this.getCountries("https://restcountries.eu/rest/v2/all");

  }



  getCountries(url:string)
  {
    this.httpClient.get(url).subscribe((res)=>{
      
      var data = res as [];
      this.countryList = res as Countrymodel[];
      /*data.forEach(item=>{
        console.log(item["name"]);
      });*/

      this.countryList.forEach(country=>{
        console.log(`country name: ${country.name} and capital name: ${country.capital}`);
      });

    });
  }

}
