import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { MealService } from '../meal.service';
import { RestauranteService } from '../restaurante.service';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {
  meals: Meal[];
  restaurants: Restaurant[];

  constructor(
    private mealService: MealService,
    private restauranteService: RestauranteService
  ) { }

  ngOnInit() {
    this.getMeal();
  }

  getMeal(): void {
    this.mealService.getAllMeals()
      .subscribe(meal => {
        this.meals = meal;
        this.meals.forEach(meal => {
          this.restauranteService.getRestaurante(meal.restaurantId)
          .subscribe(restaurante => {meal.restaurantName = restaurante.restaurantName});
        });
      });
  }

  delete(meal: Meal): void {
    this.meals = this.meals.filter(r => r !== meal);
    this.mealService.deleteMeal(meal.id).subscribe();
  }
}
