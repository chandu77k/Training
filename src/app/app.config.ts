import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FetchComponent } from './fetch/fetch.component';
import { MartComponent } from './mart/mart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'mart', pathMatch: 'full'},
  { path: 'fetch', component: FetchComponent},
  { path: 'mart', component: MartComponent},
  { path: 'product', component: ProductComponent},
  { path: '**', redirectTo: 'mart'}
]
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};
