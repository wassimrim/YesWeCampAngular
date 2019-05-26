import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { catchError } from 'rxjs/operators'; 
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

 

  login(loginPayload) {
    return this.http.post(environment.api+ '/login', loginPayload)
    .pipe(catchError(val => of(val)));
  
  }
}
