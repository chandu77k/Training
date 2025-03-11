import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-mart',
  imports: [CommonModule, SortPipe],
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
}
