import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './models/restaurant';

@Injectable( { providedIn: 'root' } )
export class RestauranteService {
  private restaurantUrl = 'http://localhost:5000/api/restaurant';
  constructor(private http: HttpClient) { }

  getAllRestaurantes(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.restaurantUrl);
  }

  getRestaurante(id: number): Observable<Restaurant>{
    const url = `${this.restaurantUrl}/${id}`
    return this.http.get<Restaurant>(url);
  }

  insertRestaurante(restaurante: Restaurant): Observable<Restaurant>{
    const url = `${this.restaurantUrl}/`
    return this.http.post<Restaurant>(url,restaurante);
  }

  updateRestaurante(restaurante: Restaurant): Observable<void>{
    const url = `${this.restaurantUrl}/${restaurante.id}`
    return this.http.put<void>(url, restaurante);
  }

  deleteRestaurante(id: number){
    const url = `${this.restaurantUrl}/${id}`
    return this.http.delete(url);
  }
}
