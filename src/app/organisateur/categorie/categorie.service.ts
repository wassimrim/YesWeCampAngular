import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Circuit } from '../circuit/Circuit';
import { Categorie } from './Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  getCategorie(id: number): Observable<Object> {
    return this.http.get(environment.api+'/categories/'+id);
  }
 
  createCategorie(categorie: Categorie): Observable<Object> {
   
    return this.http.post(environment.api+'/categories', categorie);
  }
 
  updateCategorie(id: number, value: Categorie): Observable<Object> {

    return this.http.put(environment.api+'/categories/'+id,value);
  }
 
  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(environment.api+'/categories/'+id, { responseType: 'text' });
  }
 
  getCategoriesList(): Observable<any> {
    return this.http.get(environment.api+'/categories/');
  }
}
