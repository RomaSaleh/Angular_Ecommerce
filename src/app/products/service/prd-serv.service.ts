import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PrdServService {

  constructor(private http:HttpClient) { }
  
 GetAllProduct()
  {
    return this.http.get(environment.APIUrl+'products');
  }
  GetAllCategories()
  {
    return this.http.get(environment.APIUrl+'products/categories');
  }
  
  GetProductsByCategoriy(category:string)
  {
  
    return this.http.get(environment.APIUrl+'products/category/'+category)
  }
  GetProducrById(idnum:any)
  {
    return this.http.get(environment.APIUrl+'products/'+idnum)
  }
}
