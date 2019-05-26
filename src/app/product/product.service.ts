import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Object> {
    return this.http.get(environment.api+'/articles/'+id);
  }
 
  createProduct(product: Product): Observable<Object> {
    return this.http.post(environment.api+'/articles/', product);
  }
 
  updateProduct(id: number, value: Product): Observable<Object> {
  
    return this.http.put(environment.api+'/articles/'+id,value);
  }
 
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(environment.api+'/articles/'+id, { responseType: 'text' });
  }
 
  getProductsList(): Observable<any> {
    return this.http.get(environment.api+'/articles/');
  }
}
