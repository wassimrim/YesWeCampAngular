import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';
import { Role } from './Role';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    users: Observable<User[]>;
 

  userr:Observable<Object>;

   userVariable: Array<any>=[];

   userVariable1: Array<any>=[];
   d = new Date();
   n = this.d.getFullYear();

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.reloadData();

  }


  reloadData() {
    
    this.users = this.profileService.getUser(parseInt(localStorage.getItem("idUser"),10));
    this.users.subscribe((value:User[])=>{
      this.userVariable["id"]=value["id"];
    this.userVariable["name"]=value["name"];
    this.userVariable["lastname"]=value["lastname"];
    this.userVariable["username"]=value["username"];
    this.userVariable["email"]=value["email"];
    this.userVariable["password"]=value["password"];
    this.userVariable["number"]=value["number"];
   
    this.userVariable["birthDay"]= this.n-  parseInt(value["birthDay"].slice(0,4),10);
    this.userVariable["roles"]=value["roles"][0].name.slice(5);
    this.userVariable["image"]=value["image"];

     
    }
    );
  }


  modificationProfile(userId){
   
  
   this.userr=this.profileService.getUser(userId);

   this.userr.subscribe((value:User)=>{
        this.userVariable["id"]=value.id;
        this.userVariable["name"]=value.name;
        this.userVariable["lastname"]=value.lastname;
        this.userVariable["email"]=value.email;
        this.userVariable["number"]=value.number;
        this.userVariable["birthDay"]=value.birthDay;
        this.userVariable["roles"]=value.roles.name;
        this.userVariable["image"]=value.image;
 

   
 });

  
  }

 
  onSubmit(form){

var userObject :User;
userObject= new User();
var roleObject : Role;
var  roleObject = new Role();

userObject.id=this.userVariable["id"];
userObject.name=this.userVariable["name"];
userObject.lastname=this.userVariable["prenom"];
userObject.username=this.userVariable["username"];
userObject.password=this.userVariable["password"];
userObject.email=this.userVariable["mail"];
userObject.number=this.userVariable["numTel"];
userObject.birthDay=this.userVariable["dateNaissance"];
userObject.roles=roleObject;
userObject.image=this.userVariable["image"];

this.profileService.updateUser(this.userVariable["id"], userObject).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  

}
