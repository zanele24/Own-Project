import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { LandingComponent } from './Components/Private/landing/landing.component';
import { HomeComponent } from './Components/Private/home/home.component';
import { SignupComponent } from './Components/Private/signup/signup.component';
import { SigninComponent } from './Components/Private/signin/signin.component';
import { ModalComponent } from './Components/Private/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
