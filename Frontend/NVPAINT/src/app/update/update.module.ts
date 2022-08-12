import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UpdateModule { 
    _id?: number;
    productName?: string;
    productDesc?: string;
    Price?: number;
    Liter?: number;
    Unit?: number;
    createdAt?: Date;
    updatedAt?: Date;
    __v?:number;
}
