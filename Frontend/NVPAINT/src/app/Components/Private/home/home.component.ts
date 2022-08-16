import { Component, Input, OnInit, } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { Productid } from '../../../Interface/productid';
import { UpdateModule, ViewModule } from 'src/app/update/update.module';
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


  productList: UpdateModule = new UpdateModule; 
  viewList: ViewModule = new ViewModule; 
  
  products: any;
  // id : any;
  productDialog: boolean = false;
  viewDialog: boolean = false;
  submitted = false;
  prod :any;
  

  constructor(private productsservice: ProductsServiceService,
    private messageService: MessageService,  
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,
    private route: Router) { }

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
    this.productList = {};
    this.submitted = false;
    this.productDialog = true;
    this.Form.reset()
  }


  //FUNCTION TO SAVE DATA ON THE DATABASE (SAVE THE PRODUCT)
  saveData(){
    this.submitted = true
    if(this.productList._id)
    {
      let product = {
        productName:this.productList.productName,
        productDesc:this.productList.productDesc,
        Price:this.productList.Price,
        Liter:this.productList.Liter,
        Unit:this.productList.Unit,
      }
      console.log(this.productList)
      this.confirmationService.confirm({
        message: 'Are you sure you want to Update this product ?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.productsservice.updateProduct(product,this.productList._id).subscribe(() =>{
           this.route.navigateByUrl('/home')
            this.get()
            this.productDialog = false;
          })
          
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product updated', life: 3000})
        },
        reject: () => {
          this.messageService.add({severity:'error', summary: 'Error', detail: '  Product was not updated', life: 3000})
        }
      })
    }
    else{
      let prod = {
        productName:this.productList.productName,
        productDesc:this.productList.productDesc,
        Price:this.productList.Price,
        Liter:this.productList.Liter,
        Unit:this.productList.Unit,
      }
      if(!prod.productName){
        this.productDialog = true;
      }else{
          this.productsservice.addProduct(prod).subscribe(()=>{
          this.productDialog = false;
          this.get()
        })
        this.showSuccess();
      }
    }
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
      message: 'Are you sure you want to delete  '+ details.productName +'?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsservice.deleteProduct(details).subscribe( ()=>{
          // this.get();
          // this.route.navigateByUrl('/home')
         

        })
        window.location.reload();
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product deleted', life: 3000})
      },
      reject: () => {
        this.messageService.add({severity:'error', summary: 'Error', detail: '  Product was not deleted', life: 3000})
      }
    })
  }


  //FUNCTION TO EDIT/UPDATE THE PRODUCT
  editProduct(productList: UpdateModule) {
    this.productList = {...productList};
    this.productDialog = true;
    
  }

  viewProduct(viewList: ViewModule) {
    this.viewList = {...viewList};
    this.viewDialog = true; 
  }


  hideDialog() {
    this.productDialog = false;
    this.viewDialog = false;
    this.submitted = false;
}





  // delete(id:any){
    
  //   console.log("delete"+ id)
  // }
}
