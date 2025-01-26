import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private url = 'http://localhost:8080/api/products/allProducts';

  constructor(private http: HttpClient) { }

  getAllMovies():Observable<any>{
    return this.http.get<any>(this.url);  
  }



}
