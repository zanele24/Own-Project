import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Private/home/home.component';
import { LandingComponent } from './Components/Private/landing/landing.component';
import { ProductComponent } from './Components/Private/product/product.component';



const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'home', component:HomeComponent},
  {path: 'product', component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
