import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Circuit } from './Circuit';
import { CircuitService } from './circuit.service';
import { Event } from '../event/Event';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.scss']
})
export class CircuitComponent implements OnInit {

  circuits: Observable<Circuit[]>;
 

  circuitt:Observable<Object>;

   circuitVariable: Array<any>=[];

   circuitVariable1: Array<any>=[];
   

  constructor(private circuitService: CircuitService) { }

  ngOnInit() {
    this.reloadData();

  }


  reloadData() {
    this.circuits = this.circuitService.getCircuitsList();
  }

  suppressionCircuit(circuitId) {
   
    this.circuitService.deleteCircuit(circuitId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  modificationCircuit(circuitId){
   this.circuitt=this.circuitService.getCircuit(circuitId);

   this.circuitt.subscribe((value:Circuit)=>{
   this.circuitVariable["id"]=value.id;
   this.circuitVariable["description"]=value.description;
   this.circuitVariable["type"]=value.type;
   this.circuitVariable["evenement"]=value.evenement.id;
   this.circuitVariable["image"]=value.image;
   
   
 });

  
  }

 
  onSubmit(form){

var circuitObject :Circuit;
circuitObject= new Circuit();
var evenementObject : Event;
var  evenementObject = new Event();
evenementObject.id=this.circuitVariable["evenement"];
circuitObject.id=this.circuitVariable["id"];
circuitObject.description=this.circuitVariable["description"];
circuitObject.type=this.circuitVariable["type"];
circuitObject.image=this.circuitVariable["image"];
circuitObject.evenement=evenementObject;



    this.circuitService.updateCircuit(this.circuitVariable["id"], circuitObject).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onAddCircuit(){
    //alert(this.userVariable["nom"]);
  //alert(this.circuitVariable1["evenement"]);
    var circuitObject :Circuit;
    circuitObject= new Circuit();
    var evenementObject : Event;
     var  evenementObject = new Event();
     evenementObject.id=this.circuitVariable1["evenement"];
    circuitObject.id=this.circuitVariable1["id"];
    circuitObject.description=this.circuitVariable1["description"];
    circuitObject.type=this.circuitVariable1["type"];
    circuitObject.image=this.circuitVariable1["image"];
    circuitObject.evenement=evenementObject;
    
    
    
        this.circuitService.createCircuit(circuitObject).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
      }

}
