import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/events/services/events.service';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
    <h6 class="modal-title" id="modal-title-notification">Your attention is required</h6>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true" (click)="close()">×</span>
    </button>
  </div>
  <div class="modal-body">
    <div class="py-3 text-center">
      <i class="ni ni-bell-55 ni-3x"></i>
      <h4 class="heading mt-4">You should read this!</h4>
      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-white" (click)="subscribe()">Ok</button>
    <button type="button" class="btn btn-link text-white ml-auto" data-dismiss="modal">Close</button>
  </div>
    `
})
export class NgbdModalContent {
    @Input() idEvent;

    constructor(
        private eventsServices:EventsService,
        public activeModal: NgbActiveModal
        ) {}
    subscribe(){
        this.eventsServices.addEvent( localStorage.getItem('idUser'),this.idEvent)
        .subscribe(res=>{
            this.activeModal.dismiss();
        })
    }
    close() {
       
        this.activeModal.dismiss();
    }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
