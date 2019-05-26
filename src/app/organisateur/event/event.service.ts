import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from './Event';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  

  constructor(private http: HttpClient) { }

  getEvent(id: number): Observable<Object> {
    return this.http.get(environment.api+'/evenements/'+id);
  }
 
  createEvent(event: Event): Observable<Object> {
    return this.http.post(environment.api+'/evenements/', event);
  }
 
  updateEvent(id: number, value: Event): Observable<Object> {
    //var myObject={};
   // alert(JSON.stringify(value));debugger;
    return this.http.put(environment.api+'/evenements/'+id,value);
  }
 
  deleteEvent(id: number): Observable<any> {
    return this.http.delete(environment.api+'/evenements/'+id, { responseType: 'text' });
  }
 
  getEventsList(): Observable<any> {
   return this.http.get(environment.api+'/evenements/');
  }
 
 
}
