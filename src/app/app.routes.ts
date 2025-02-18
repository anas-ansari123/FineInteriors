import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ServicesComponent } from './components/services.component';
import { ProductsComponent } from './components/products.component';
import { ContactComponent } from './components/contact.component';
import { HeroComponent } from './components/hero.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hero', component: HeroComponent },
  { path: '**', redirectTo: '' } // Wildcard route for 404 handling
];
