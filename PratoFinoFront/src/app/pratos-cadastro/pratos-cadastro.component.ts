import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../models/restaurant';
import { Meal } from '../models/meal';
import { MealService } from '../meal.service';
import { RestauranteService} from '../restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pratos-cadastro',
  templateUrl: './pratos-cadastro.component.html',
  styleUrls: ['./pratos-cadastro.component.css']
})
export class PratosCadastroComponent implements OnInit {
  restaurantes: Restaurant[];
  meal: Meal = {} as Meal;

  constructor(
    private mealService: MealService,
    private restauranteService: RestauranteService, 
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMeal();
    this.getRestaurantes();
  }

  getMeal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(!id){
      this.meal.restaurantId = 0;
      return;
    }
    this.mealService.getMeal(id)
      .subscribe(meal => {
        this.meal = meal;
      });
  }

  getRestaurantes(): void {
    this.restauranteService.getAllRestaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);
  }

  manter(): void {
    if(!this.meal.name || !this.meal.price || this.meal.restaurantId <= 0){ return; }

    if(this.meal.id){
      this.mealService.updateMeal(this.meal)
        .subscribe(meal =>{
          this.router.navigate(['/pratos']);
        });
    }else{
      this.mealService.insertMeal(this.meal)
      .subscribe(meal =>{
        this.router.navigate(['/pratos']);
      });
    }
  }
}
