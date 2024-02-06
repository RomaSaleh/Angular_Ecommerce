import { Component } from '@angular/core';
import { CartServService } from '../../service/cart-serv.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  total:number=0;
  CartProduct:any[]=[];
  success:boolean=false;

  constructor(private service:CartServService){}

  ngOnInit():void
  {
    this.GetCartProducts();
  }

  GetCartProducts()
  {
      if(localStorage.getItem('AddedCart')!=null)
     {
      this.CartProduct=JSON.parse(localStorage.getItem("AddedCart")!);
      this.calctotalprice();

     }
  }

   calctotalprice()
   {

    this.total=0;
    for(let i in this.CartProduct)
      {
      this.total+=this.CartProduct[i].item.price * this.CartProduct[i].quantity;
      }

    }

    minusaccount(index:number)
     {
       //console.log(index);
       this.CartProduct[index].quantity--;
        localStorage.setItem("AddedCart",JSON.stringify(this.CartProduct));
        this.calctotalprice();
    
     }

     addaccount(index:number)
     {
      this.CartProduct[index].quantity++;
      localStorage.setItem("AddedCart",JSON.stringify(this.CartProduct));
      this.calctotalprice();
     }

     detectshange()
     {
      localStorage.setItem("AddedCart",JSON.stringify(this.CartProduct));
      this.calctotalprice();

     }
     
     delete(index:number)
     {
        this.CartProduct.splice(index,1);
        localStorage.setItem("AddedCart",JSON.stringify(this.CartProduct));
        this.calctotalprice();
     }

     clearcart()
     {
       this.CartProduct=[];
       localStorage.setItem("AddedCart",JSON.stringify(this.CartProduct));
       this.calctotalprice();
     }
    addToCart()
    {
      let cartarr=this.CartProduct.map(item=>
        {return{productId:item.item.id , quantity:item.quantity}}
      )

      let Model=
      {
        userId:5,
        date:new Date(),
        products:cartarr
      }
      console.log(Model);
      this.service.creatNewCart(Model).subscribe(res=>{this.success=true})

    }

  















}
