import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Countrymodel } from 'src/app/models/countrymodel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userModel = new User();

  //https://restcountries.eu/rest/v2/all
  public countryList: Countrymodel[] = [];
  constructor(private http: HttpClient) {


    this.http.get("https://restcountries.eu/rest/v2/all").subscribe((res) => {
      // console.log(res);
      this.countryList = res as Countrymodel[];
    });
  }

  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "e9258791-b973-40fc-6b9e-c77aba7f4766",
      "Access-Control-Allow-Origin": "*"
    })
  };

  public SignUp() {
    console.log(this.userModel);

    this.http.post("http://localhost:51573/api/userMasters", {

      "userName": this.userModel.UserName,
      "userEmailId": this.userModel.EmailId,
      "userPassword": this.userModel.Password,
      "userGender": this.userModel.Gender,
      "userCountry": this.userModel.CountryName

    },this.httpOptions).subscribe((res) => {
      console.log(`your ressponse is ${res}`);
    });
  }

  ngOnInit() {

  }

}
