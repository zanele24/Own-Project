import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { UpdateModule } from 'src/app/update/update.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productsservice: ProductsServiceService) { }

  ngOnInit(): void {
  }


  viewById(productList: UpdateModule){
    this.productsservice.viewProduct(productList).subscribe(() =>{
      console.log(productList)
    })
  }
}
