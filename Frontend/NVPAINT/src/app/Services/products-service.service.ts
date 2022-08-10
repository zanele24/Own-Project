import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Productid } from '../Components/Private/productid';

const baseURL = environment.baseURL
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {


  constructor(private http: HttpClient) { }

  // public addProduct(productData: any){
  //   const product ={
  //     product_name: productData,
  //     product_desc: productData,
  //     Price: productData,
  //     Unit: productData

  //   };
  //  return this.http.post(baseURL+"/add",productData)
  // }
  
  addProduct(productName: any ,productDesc: any, Price: any,Liter:any,Unit: any ){
    return this.http.post(baseURL+"add", { productName,productDesc,Price,Liter,Unit })
  }
  viewAll(){
   return this.http.get(baseURL+"view")
  }

  viewProduct(id: any): void{
    this.http.get(baseURL+"view/",id)
  }

  updateProduct(id : any){
    this.http.put(baseURL+"update/",id)
  }

  deleteProduct(id:Productid){
   return this.http.delete(`${baseURL}delete/${id._id}`)
  }
}
