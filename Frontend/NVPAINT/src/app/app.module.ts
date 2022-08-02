import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GalleriaModule} from 'primeng/galleria';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { LandingComponent } from './Components/Private/landing/landing.component';
import { HomeComponent } from './Components/Private/home/home.component';
import { SignupComponent } from './Components/Private/signup/signup.component';
import { SigninComponent } from './Components/Private/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
