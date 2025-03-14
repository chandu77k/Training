import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MartComponent } from './mart/mart.component';
import { FetchComponent } from './fetch/fetch.component';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MartComponent,FetchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular1';
  task = 'dhanush';
}
