import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrdServService } from '../../service/prd-serv.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  currentid:any;
  data:any={};
  loading:boolean = false;
  constructor(private activatedRoute:ActivatedRoute,private service:PrdServService)
  { }


  ngOnInit():void
  {
    this.currentid=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.currentid);
    this.GetSingleProduct();

  }
  GetSingleProduct()
  {
    this.loading=true;
    this.service.GetProducrById(this.currentid).subscribe(res=>{this.data=res,this.loading=false},
      error=>{this.loading=false,alert(error)}
    
    );
    console.log(this.data);
  }

}
