import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { Productid } from '../productid';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class HomeComponent implements OnInit {

  Form = new FormGroup({
    product_name: new FormControl(''),
    product_desc: new FormControl(''),
    Price: new FormControl(''),
    Liters: new FormControl(''),
    Unit: new FormControl(''),
  });


  products: any;
  currentIndex = -1;
  currentTutorial= {}
  productDialog: boolean = false;
  submitted = false;

  constructor(private productsservice: ProductsServiceService,
    private messageService: MessageService,  
    private confirmationService: ConfirmationService,
    private router :Router, 
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.Form = this.formBuilder.group({
      product_name: ['', Validators.required],
      product_desc: ['', Validators.required],
      Price: ['', Validators.required],
      Liters: ['', Validators.required],
      Unit: ['', Validators.required],
    });


   this.get()
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls;
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
}


  //FUNCTION TO SAVE DATA ON THE DATABASE (SAVE THE PRODUCT)
  saveData(){
    this.submitted = true

    if(this.Form.invalid)
      {
        this.showError()
        return 
      }
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
      // this.isSuccessful =true
      this.showSuccess()
     this.productDialog = true;

      console.log(productList)
      // return true
       this.Form.reset();
  }


  showError() {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Fields Should not be Empty'});
 }

 showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'Product is Added'});
 }


 //FUNCTION TO VIEW THE PRODUCTS ON THE TABLE
  get(){
    return this.productsservice.viewAll().subscribe({
      next:data => {
        this.products = data
      }
    });
  }


  //FUNCTION TO DELETE A PRODUCT
  delete(details:Productid){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete  '+details.productName+'?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsservice.deleteProduct(details).subscribe({
          next:data =>{
            console.log(data)
            
          }
        })
        
     this.get()
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000})
      },
      reject: () => {
        this.messageService.add({severity:'error', summary: 'Error', detail: '  Product was not Deleted', life: 3000})
      }
    })
  }


  //FUNCTION TO EDIT/UPDATE THE PRODUCT
  editProduct(product: Productid) {
    this.products = {...product};
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}



  // delete(id:any){
    
  //   console.log("delete"+ id)
  // }
}
