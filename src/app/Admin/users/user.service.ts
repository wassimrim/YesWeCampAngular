import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/profile/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  deleteUser(id: number): Observable<any> {
    return this.http.delete(environment.api+'/users/'+id, { responseType: 'text' });
  }
 
  getUsersList(): Observable<any> {
    return this.http.get(environment.api+'/users/');
  }
 
}
