import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  
 
  createUser(user: User): Observable<Object> {
    
    return this.http.post(environment.api+'/register', user);
  }
 
  
}
