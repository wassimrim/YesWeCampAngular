import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
   'Authorization': 'Bearer '+ /*localStorage.getItem("token")*/'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3YXNzIiwiaWF0IjoxNTU2ODkyMDAwLCJleHAiOjE1NTY5Nzg0MDB9.KNjY4Jxm9akhIKWj2gEn9zf2E45UAu9QhVDqxsOrkUp2jqcTugGr-X8uz_7HHzMR6zdv-YHByUny_BctKZLoRg'
});
console.log(headers_object);

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};




@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  constructor(
    private http: HttpClient) { 

    }
    

  getEvents(){
      return this.http.get(environment.api+'/evenements',httpOptions);
  }
  addEvent(idUser,idEvent){
    return this.http.post(environment.api+'/inscriptions/'+idUser+'/'+idEvent,{},httpOptions);
}
}
