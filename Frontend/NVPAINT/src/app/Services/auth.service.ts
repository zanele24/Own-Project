import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../Interface/auth';

// const baseURL = environment.baseURL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.baseURL

  constructor(private http: HttpClient) { }

  // signin(user: Auth) : Observable<any> {
  //   return this.http.post(baseURL+"signin", {user})
  // }

  signin(user: Auth) {
    return this.http.post(`${this.baseURL}`+ 'signin', user)
  }

  signout(){
    
  }
}
