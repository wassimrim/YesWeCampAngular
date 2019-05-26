import { Component, OnInit } from '@angular/core';
import { EventsService } from './services/events.service';
import { NgbdModalContent } from '../sections/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events:any;
  constructor(
    private eventsServices:EventsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.eventsServices.getEvents()
    .subscribe(res=>{
      this.events=res;
      console.log(this.events)
    })
  }
  open(id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.idEvent = id;
}
}
