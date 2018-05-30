import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {
  meals: Meal[];

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.getMeal();
  }

  getMeal(): void {
    this.mealService.getAllMeals()
      .subscribe(meal => this.meals = meal);
  }

  delete(meal: Meal): void {
    this.meals = this.meals.filter(r => r !== meal);
    this.mealService.deleteMeal(meal.id).subscribe();
  }
}
