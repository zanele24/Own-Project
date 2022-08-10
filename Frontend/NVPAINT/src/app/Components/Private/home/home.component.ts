import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { Productid } from '../productid';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class HomeComponent implements OnInit {
  products: any;
  currentIndex = -1;
  currentTutorial= {}
  productDialog: boolean = false;

  constructor(private productsservice: ProductsServiceService,  private messageService: MessageService,  
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
   this.get()
  }
  get(){
    return this.productsservice.viewAll().subscribe({
      next:data => {
        this.products = data
      }
    });
  }

  delete(details:Productid){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete  '+details.productName+'?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsservice.deleteProduct(details).subscribe({
          next:data =>{
            console.log(data)
            this.get()
          }
        })
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000})
      },
      reject: () => {
        this.messageService.add({severity:'error', summary: 'Error', detail: '  Product was not Deleted', life: 3000})
      }
    })
  }

  editProduct(product: Productid) {
    this.products = {...product};
 
  }

  
  // delete(id:any){
    
  //   console.log("delete"+ id)
  // }
}
