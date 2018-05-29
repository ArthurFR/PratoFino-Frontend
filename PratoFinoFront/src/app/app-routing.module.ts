import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent }         from './home/home.component';
import { PratosComponent }       from './pratos/pratos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'pratos', component: PratosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
