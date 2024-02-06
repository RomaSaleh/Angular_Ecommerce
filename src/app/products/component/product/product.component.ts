import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data:any=Object;
  
  @Output() item:EventEmitter<object>=new EventEmitter<object>();
  amount:number=0;
  AddButton:boolean=false;
  

  Add(event:any)
  {
    this.item.emit({item:this.data,quantity:this.amount});
  
  }

}
