import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent {
  @Input() data:any[]=[];
  @Input() title:string="";
  @Output() SelectedValue :EventEmitter<string>=new EventEmitter<string>();

   FilterCategory(event:any)
  {
    let value=event.target.value;
    console.log(value);
    console.log(event);
    this.SelectedValue.emit(event);

  }

}
