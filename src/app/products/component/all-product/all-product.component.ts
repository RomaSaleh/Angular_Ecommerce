import { HttpClientModule } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { PrdServService } from '../../service/prd-serv.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {
  prdarr:any[]=[];
  catarr:any[]=[];
  SpinnerState:boolean=false;

  CartProduct:any[]=[];


  constructor( private serv:PrdServService)
  {
    
  }

  ngOnInit(){

    this.getallproduct(); 
    this.getallcategories();
  }

  getallproduct()
  {
    this.SpinnerState=true;
     this.serv.GetAllProduct().subscribe((res:any)=>
     {this.prdarr=res;this.SpinnerState=false; }
      ,error =>{alert("Error in prds"),this.SpinnerState=false; } );
  }
getallcategories()
{
  this.SpinnerState=true;
  this.serv.GetAllCategories().subscribe( (data:any)=>
  { this.catarr=data;this.SpinnerState=false;},
  error =>{alert("Error in cat",),this.SpinnerState=false; } );

}
GetProductByCategory(event:any)
{
  this.SpinnerState=true;
  let value=event.target.value;
  value=="All Categories"?   this.getallproduct():
  this.serv.GetProductsByCategoriy(value).subscribe((data:any)=>
  {this.prdarr=data;this.SpinnerState=false;},
  error =>{alert("Error in prd by cat",),this.SpinnerState=false;}  );

  // or 
  // if(value=="All Categories")
  // {
  //   this.getallproduct();
  // }
  // else
  // this.serv.GetProductsByCategoriy(value).subscribe((data:any)=>{this.prdarr=data;},error =>alert("Error in prd by cat",)  );

}
AddToCart(value:any)
{
 
  if(this.CartProduct.find((data:any)=>data.item.id==value.item.id)) 
  {
    // console.log(this.CartProduct);
    console.log(value.id);
    alert("you already added this item");
  }
  else
  {
  

    this.CartProduct.push(value);
    localStorage.setItem("AddedCart" , JSON.stringify(this.CartProduct));
    // console.log(this.CartProduct);
    // console.log(localStorage.getItem('AddedCart'));

  }


 
 // JSONson.stringfy when send data
  // json.parse when receive data
 
  //  console.log(value);
  // if("cart" in localStorage)
  // {
  //   console.log("hjhjfhjf");
  //   this.CartProduct=JSON.parse(localStorage.getItem("cart")!);
  //   let exist=this.CartProduct.find((Item:any)=>(Item.item.id==value.item.id))
  //   console.log(value.Item.id);

  //   exist?alert("THE PRODUCT IS ALREADY EXIST") : 
  //   this.CartProduct.push(value);
  //   localStorage.setItem(JSON.stringify(this.CartProduct),"cart"); 


  // }
  //  else
  //  {
  //    console.log(this.CartProduct);
  //    this.CartProduct.push(value);
  //    localStorage.setItem(JSON.stringify(this.CartProduct),"cart");
 
  //  }
  }


  

  }

