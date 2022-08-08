import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  Form = new FormGroup({
    product_name: new FormControl(''),
    product_desc: new FormControl(''),
    Price: new FormControl(''),
    Liters: new FormControl(''),
    Unit: new FormControl(''),
  });

  isSuccessful = false;
  submitted = false;

  constructor(private products: ProductsServiceService, private router :Router, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
    product_name: ['', Validators.required],
    product_desc: ['', Validators.required],
    Price: ['', Validators.required],
    Liters: ['', Validators.required],
    Unit: ['', Validators.required],
  });

  }

  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls;
  }

  saveData(){
    this.submitted = true
    
    let productList= {
      product_name: this.Form.value.product_name,
      product_desc: this.Form.value.product_desc,
      price: this.Form.value.Price,
      liters: this.Form.value.Liters,
      unit: this.Form.value.Unit
    }

    this.products.addProduct(
      this.Form.value.product_name, 
      this.Form.value.product_desc, 
      this.Form.value.Price, 
      this.Form.value.Liters, 
      this.Form.value.Unit).subscribe()

      console.log(productList)

      if(this.Form.value.product_name === "" || this.Form.value.product_name == null 
      || this.Form.value.product_desc === "" || this.Form.value.product_desc == null 
      || this.Form.value.Price === "" || this.Form.value.Price == null
      || this.Form.value.Liters === "" || this.Form.value.Liters == null 
      || this.Form.value.Unit === "" || this.Form.value.Unit == null 
      )
      {
        alert("please input all fields!!")
        return false
      }
      return true

      

  }

  deleteProduct(){
    this.products.deleteProduct
  }


}
