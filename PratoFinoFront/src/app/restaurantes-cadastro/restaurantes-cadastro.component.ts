import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../models/restaurant';
import { RestauranteService } from '../restaurante.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurantes-cadastro',
  templateUrl: './restaurantes-cadastro.component.html',
  styleUrls: ['./restaurantes-cadastro.component.css']
})
export class RestaurantesCadastroComponent implements OnInit {
  private restaurante: Restaurant = {} as Restaurant;
  
  constructor(
    private restauranteService: RestauranteService, 
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(){
    const restaurantId = +this.route.snapshot.paramMap.get('id');
    if(!restaurantId) { return; }
    this.restauranteService.getRestaurante(restaurantId)
      .subscribe(restaurante => {
        this.restaurante = restaurante;
      });
  }
  
  manter(): void{
    if(!this.restaurante.restaurantName){ return; }

    if(this.restaurante.restaurantId){
      this.restauranteService.updateRestaurante(this.restaurante)
        .subscribe(restaurante =>{
          this.router.navigate(['/restaurantes']);
        });
    }else{
      this.restauranteService.insertRestaurante(this.restaurante)
      .subscribe(restaurante =>{
        this.router.navigate(['/restaurantes']);
      });
    }
  }

}
