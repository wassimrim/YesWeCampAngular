import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Circuit } from './Circuit';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

 
  constructor(private http: HttpClient) { }

  getCircuit(id: number): Observable<Object> {
    return this.http.get(environment.api+'/circuits/'+id);
  }
 
  createCircuit(circuit: Circuit): Observable<Object> {
    alert(circuit.evenement);
    return this.http.post(environment.api+'/circuits', circuit);
  }
 
  updateCircuit(id: number, value: Circuit): Observable<Object> {
    //var myObject={};
   // alert(JSON.stringify(value));debugger;
    return this.http.put(environment.api+'/circuits/'+id,value);
  }
 
  deleteCircuit(id: number): Observable<any> {
    return this.http.delete(environment.api+'/circuits/'+id, { responseType: 'text' });
  }
 
  getCircuitsList(): Observable<any> {
    return this.http.get(environment.api+'/circuits/');
  }
  
}
