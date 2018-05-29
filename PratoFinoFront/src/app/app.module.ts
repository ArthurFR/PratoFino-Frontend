import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PratosComponent } from './pratos/pratos.component';
import { RestaurantesFiltroComponent } from './restaurantes-filtro/restaurantes-filtro.component';
import { RestaurantesListaComponent } from './restaurantes-lista/restaurantes-lista.component';
import { RestaurantesCadastroComponent } from './restaurantes-cadastro/restaurantes-cadastro.component';
import { PratosCadastroComponent } from './pratos-cadastro/pratos-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RestaurantesComponent,
    PratosComponent,
    RestaurantesFiltroComponent,
    RestaurantesListaComponent,
    RestaurantesCadastroComponent,
    PratosCadastroComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
