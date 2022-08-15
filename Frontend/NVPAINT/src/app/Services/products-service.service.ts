import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Productid } from '../Interface/productid';
import { UpdateModule } from '../update/update.module';

const baseURL = environment.baseURL
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }
  
  addProduct(product: any ){
    return this.http.post(baseURL+"add",product)
  }

  viewAll(){
   return this.http.get(baseURL+"view")
  }

  viewProduct(id: UpdateModule){
     return this.http.get(`${baseURL}view/,${id._id}`)
    
  }

  updateProduct(product: any,id: any ){
    return this.http.patch(`${baseURL}update/${id}`,product)
  }

  deleteProduct(id:Productid){
   return this.http.delete(`${baseURL}delete/${id._id}`)
  }
}
