import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Private/home/home.component';
import { LandingComponent } from './Components/Private/landing/landing.component';
import { SigninComponent } from './Components/Private/signin/signin.component';
import { SignupComponent } from './Components/Private/signup/signup.component';
import {GalleriaModule} from 'primeng/galleria';

const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'home', component:HomeComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'signin', component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
