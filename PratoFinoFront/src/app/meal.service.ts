import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meal } from './models/meal';

@Injectable()
export class MealService {

  private mealUrl = 'http://localhost:5000/api/meal';
  constructor(private http: HttpClient) { }

  getAllMeals(): Observable<Meal[]>{
    return this.http.get<Meal[]>(this.mealUrl);
  }

  getMeal(id: number): Observable<Meal>{
    const url = `${this.mealUrl}/${id}`
    return this.http.get<Meal>(url);
  }

  insertMeal(meal: Meal): Observable<Meal>{
    const url = `${this.mealUrl}/`
    return this.http.post<Meal>(url,meal);
  }

  updateMeal(meal: Meal): Observable<void>{
    const url = `${this.mealUrl}/${meal.id}`
    return this.http.put<void>(url, meal);
  }

  deleteMeal(id: number){
    const url = `${this.mealUrl}/${id}`
    return this.http.delete(url);
  }
}
