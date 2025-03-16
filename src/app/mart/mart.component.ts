import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SortPipe } from '../sort.pipe';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-mart',
  standalone: true,
  imports: [CommonModule, SortPipe, ProductComponent],
  templateUrl: './mart.component.html',
  styleUrl: './mart.component.css'
})
export class MartComponent {
  objects = [
    { name: 'Apple', color: 'green', price: 100 },
    { name: 'Banana', color: 'yellow', price: 50 },
    { name: 'Cherry', color: 'red', price: 200 },
    { name: 'Grapes', color: 'purple', price: 120 },
    { name: 'Orange', color: 'orange', price: 80 },
    { name: 'Pineapple', color: 'brown', price: 150 },
    { name: 'Strawberry', color: 'red', price: 180 },
    { name: 'Mango', color: 'yellow', price: 130 },
    { name: 'Peach', color: 'pink', price: 110 },
    { name: 'Watermelon', color: 'green', price: 90 }
  ];
  parentMessage = "Hello from parent";
  childMessage = " ";
  
  receiveMessage(message : string){
    this.childMessage = message;
  }
}
