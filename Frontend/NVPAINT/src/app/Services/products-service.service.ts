import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Productid } from '../Interface/productid';
import { Productslist } from '../Interface/productslist';
import { UpdateModule } from '../update/update.module';

const baseURL = environment.baseURL
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {


  constructor(private http: HttpClient) { }
  
  addProduct(productName: any ,productDesc: any, Price: any,Liter:any,Unit: any ){
    return this.http.post(baseURL+"add", { productName,productDesc,Price,Liter,Unit })
  }
  viewAll(){
   return this.http.get(baseURL+"view")
  }

  viewProduct(id: UpdateModule){
     return this.http.get(`${baseURL}view/,${id._id}`)
    
  }

  updateProduct(id: UpdateModule){
    return this.http.get(`${baseURL}update/,${id._id}`)
  }

  deleteProduct(id:Productid){
   return this.http.delete(`${baseURL}delete/${id._id}`)
  }
}
