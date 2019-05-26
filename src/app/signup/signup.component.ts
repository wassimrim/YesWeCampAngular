import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupService } from './signup.service';
import { User } from './User';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { isUndefined } from 'util';
import { Router } from '@angular/router';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    @ViewChild('classic2') public classic2 :  ModalDirective;
    user: Array<any>=[];
    closeResult:string;
    showModal:boolean=false;
    message:string;
    
   
   // @ViewChild('lgModal') public lgModal: ModalDirective;
    
    constructor(private signupService : SignupService, private modalService:NgbModal,public router:Router) { }

    open(content, type, modalDimension,error) {
        this.message=error.slice(7);
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = 'Closed with: $result';
            }, (reason) => {
                this.closeResult = 'Dismissed $this.getDismissReason(reason)';
            });
        } else if (modalDimension === '' && type === 'Notification') {
          this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
              this.closeResult = 'Closed with: $result';
          }, (reason) => {
              this.closeResult = 'Dismissed $this.getDismissReason(reason)';
          });
        } else {
            this.modalService.open(content,{ centered: true }).result.then((result) => {
                this.closeResult = 'Closed with: $result';
            }, (reason) => {
                this.closeResult = 'Dismissed $this.getDismissReason(reason)';
            });
        }
    }





    ngOnInit() {
       // this.open(this.classic2, 'Notification', '');
    }


    onAddUser(){
       
        
        var userObject :User;
        userObject= new User();
        var userObject : User;
         var  userObject = new User();
       
         userObject.name=this.user["name"];
         userObject.lastname=this.user["lastname"];
         userObject.username=this.user["username"];
         userObject.number=this.user["number"];
         userObject.roles= new Array("");
         userObject.password=this.user["password"];
         userObject.image=this.user["image"];
         userObject.birthDay=this.user["birthDay"];
         userObject.email=this.user["email"];
        this.signupService.createUser(userObject).subscribe(
              data => {
                //  alert("sss");
               // this.open(this.classic2, 'Notification', '',data.va);
                this.router.navigate(['']);
                },
              error => {
              //if(error ==undefined)
              this.open(this.classic2, 'Notification', '',error.error.message);
              });

          }
}
