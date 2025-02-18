import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { ServicesComponent } from './components/services.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent
  ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'FineInteriors';
}
