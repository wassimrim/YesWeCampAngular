import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hebergement } from './Hebergement';

@Injectable({
  providedIn: 'root'
})
export class HebergementService {

  constructor(private http: HttpClient) { }

  getHebergement(id: number): Observable<Object> {
    return this.http.get(environment.api+'/hebergements/'+id);
  }
 
  createHebergement(hebergement: Hebergement): Observable<Object> {
    
    return this.http.post(environment.api+'/hebergements', hebergement);
  }
 
  updateHebergement(id: number, value: Hebergement): Observable<Object> {
    //var myObject={};
   // alert(JSON.stringify(value));debugger;
    return this.http.put(environment.api+'/hebergements/'+id,value);
  }
 
  deleteHebergement(id: number): Observable<any> {
    return this.http.delete(environment.api+'/hebergements/'+id, { responseType: 'text' });
  }
 
  getHebergementsList(): Observable<any> {
// alert("hhh");
    return this.http.get(environment.api+'/hebergements/');
  }
}
