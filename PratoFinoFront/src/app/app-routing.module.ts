import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantesCadastroComponent } from './restaurantes-cadastro/restaurantes-cadastro.component';
import { HomeComponent }         from './home/home.component';
import { PratosComponent }       from './pratos/pratos.component';
import { PratosCadastroComponent } from './pratos-cadastro/pratos-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'restaurantes/novo', component: RestaurantesCadastroComponent },
  { path: 'pratos', component: PratosComponent },
  { path: 'pratos/novo', component: PratosCadastroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
