import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MartComponent } from './mart/mart.component';
import { FetchComponent } from './fetch/fetch.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet,MartComponent,FetchComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular1';
  task = 'dhanush';
}
