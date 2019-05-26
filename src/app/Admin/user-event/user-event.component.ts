import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/organisateur/event/Event';
import { EventService } from 'src/app/organisateur/event/event.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss']
})
export class UserEventComponent implements OnInit {

  events: Observable<Event[]>;
   

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.reloadData();
 }


 

  reloadData() {
    this.events = this.eventService.getEventsList();
  }

}
