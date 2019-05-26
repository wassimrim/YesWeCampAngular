import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(environment.api+'/users/'+id);
  }
 
   updateUser(id: number, value: User): Observable<Object> {
   return this.http.put(environment.api+'/users/'+id,value);
  }
 
 
 
  
 
}
