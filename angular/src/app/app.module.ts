import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './common/home/home.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { SignupComponent } from './user/signup/signup.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
