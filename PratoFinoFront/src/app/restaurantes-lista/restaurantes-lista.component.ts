import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../models/restaurant';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurantes-lista',
  templateUrl: './restaurantes-lista.component.html',
  styleUrls: ['./restaurantes-lista.component.css']
})
export class RestaurantesListaComponent implements OnInit {
  restaurantes: Restaurant[];

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
    this.getRestaurantes();
  }

  getRestaurantes(): void {
    this.restauranteService.getAllRestaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);
  }

  delete(restaurante: Restaurant): void {
    this.restaurantes = this.restaurantes.filter(r => r !== restaurante);
    this.restauranteService.deleteRestaurante(restaurante.restaurantId).subscribe();
  }

}
