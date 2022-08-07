import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Form = new FormGroup({
    product_name: new FormControl(''),
    product_desc: new FormControl(''),
    Price: new FormControl(''),
    Liters: new FormControl(''),
    Unit: new FormControl(''),
  });

  isSuccessful = false;

  constructor(private products: ProductsServiceService, private router :Router) { }

  ngOnInit(): void {
  }

  saveData(){
    
    let productList= {
      product_name: this.Form.value.product_name,
      product_desc: this.Form.value.product_desc,
      price:this.Form.value.Price,
      liters: this.Form.value.Liters,
      unit: this.Form.value.Unit
    }
    this.products.addProduct(productList).subscribe()

    if(this.isSuccessful){
      console.log("product was successfully added")
    }
  }
}
