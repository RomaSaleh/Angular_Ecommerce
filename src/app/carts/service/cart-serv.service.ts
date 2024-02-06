import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartServService {

  constructor(private http:HttpClient) { }

  creatNewCart(model:any)
  {
    return this.http.post(environment.APIUrl +'carts',model)

  }
}
