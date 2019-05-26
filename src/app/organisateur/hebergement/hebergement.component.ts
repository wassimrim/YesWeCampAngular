import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hebergement } from './Hebergement';
import { HebergementService } from './hebergement.service';
import { Event } from '../event/Event';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss']
})
export class HebergementComponent implements OnInit {

  hebergements: Observable<Hebergement[]>;
 

  hebergementt:Observable<Object>;

  hebergementVariable: Array<any>=[];

  hebergementVariable1: Array<any>=[];
   

  constructor(private hebergementService: HebergementService) { }

  ngOnInit() {
    this.reloadData();

  }


  reloadData() {
    this.hebergements = this.hebergementService.getHebergementsList();
  }

  suppressionHebergement(HibergementId) {
   
    this.hebergementService.deleteHebergement(HibergementId)
      .subscribe(
        data => {
          alert(data);
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  modificationHebergement(hebergementId){
   this.hebergementt=this.hebergementService.getHebergement(hebergementId);
  
   this.hebergementt.subscribe((value:Hebergement)=>{
  
   this.hebergementVariable["id"]=value.id;
   this.hebergementVariable["image"]=value.image;
   this.hebergementVariable["adresse"]=value.adresse;
   this.hebergementVariable["capacite"]=value.capacite;
   this.hebergementVariable["labelle"]=value.labelle;
   this.hebergementVariable["numTel"]=value.numTel;
   this.hebergementVariable["type"]=value.type;
   this.hebergementVariable["evenement"]=value.evenement.id;
   
  
   
   
 });

  
  }

 
  onSubmit(form){

var hebergementObject :Hebergement;
hebergementObject= new Hebergement();
var evenementObject : Event;
var  evenementObject = new Event();
evenementObject.id=this.hebergementVariable["evenement"];
hebergementObject.id=this.hebergementVariable["id"];
hebergementObject.adresse=this.hebergementVariable["adresse"];
hebergementObject.capacite=this.hebergementVariable["capacite"];
hebergementObject.labelle=this.hebergementVariable["labelle"];
hebergementObject.numTel=this.hebergementVariable["numTel"];
hebergementObject.type=this.hebergementVariable["type"];
hebergementObject.image=this.hebergementVariable["image"];
hebergementObject.evenement=evenementObject;



    this.hebergementService.updateHebergement(this.hebergementVariable["id"], hebergementObject).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onAddHebergement(){
    //alert(this.userVariable["nom"]);
  //alert(this.circuitVariable1["evenement"]);
    var hebergementObject :Hebergement;
    hebergementObject= new Hebergement();
    var evenementObject : Event;
     var  evenementObject = new Event();
     evenementObject.id=this.hebergementVariable1["evenement"];
  
     hebergementObject.id=this.hebergementVariable1["id"];
     hebergementObject.adresse=this.hebergementVariable1["adresse"];
     hebergementObject.capacite=this.hebergementVariable1["capacite"];
     hebergementObject.labelle=this.hebergementVariable1["labelle"];
     hebergementObject.numTel=this.hebergementVariable1["numTel"];
     hebergementObject.type=this.hebergementVariable1["type"];
     hebergementObject.image=this.hebergementVariable1["image"];
     hebergementObject.evenement=evenementObject;
    
    
    
        this.hebergementService.createHebergement(hebergementObject).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
      }

}
