import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MartComponent } from './mart/mart.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular1';
  task = 'dhanush';
}
