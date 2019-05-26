import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from './event.service';
import { Event } from './Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: Observable<Event[]>;
 

  eventt:Observable<Object>;

   eventVariable: Array<any>=[];

   eventVariable1: Array<any>=[];
   

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.reloadData();

  }


  reloadData() {
    this.events = this.eventService.getEventsList();
  }

  suppressionEvent(evenementId) {
   
    this.eventService.deleteEvent(evenementId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  modificationEvenement(evenementId){
   this.eventt=this.eventService.getEvent(evenementId);

   this.eventt.subscribe((value:Event)=>{
   this.eventVariable["id"]=value.id;
   this.eventVariable["description"]=value.description;
   this.eventVariable["labelle"]=value.labelle;
   this.eventVariable["prix"]=value.prix;
   this.eventVariable["type"]=value.type;
   this.eventVariable["image"]=value.image;
   
 });

  
  }

 
  onSubmit(form){
//alert(this.userVariable["nom"]);
var eventObject :Event;
eventObject= new Event();
eventObject.id=this.eventVariable["id"];
eventObject.description=this.eventVariable["description"];
eventObject.labelle=this.eventVariable["labelle"];
eventObject.prix=this.eventVariable["prix"];
eventObject.type=this.eventVariable["type"];
eventObject.image=this.eventVariable["image"];




    this.eventService.updateEvent(this.eventVariable["id"], eventObject).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onAddEvent(){
    //alert(this.userVariable["nom"]);
    var eventObject :Event;
    eventObject= new Event();
    eventObject.id=this.eventVariable1["id"];
    eventObject.description=this.eventVariable1["description"];
    eventObject.labelle=this.eventVariable1["labelle"];
    eventObject.prix=this.eventVariable1["prix"];
    eventObject.type=this.eventVariable1["type"];
    eventObject.image=this.eventVariable1["image"];
    
    
    
        this.eventService.createEvent(eventObject).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
      }
 

}
