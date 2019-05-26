import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from './Categorie';
import { CategorieService } from './categorie.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: Observable<Categorie[]>;
 

  categoriee:Observable<Object>;

   categorieVariable: Array<any>=[];

   categorieVariable1: Array<any>=[];
   

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.reloadData();

  }


  reloadData() {
    this.categories = this.categorieService.getCategoriesList();
  }

  suppressionCategorie(categorieId) {
   
    this.categorieService.deleteCategorie(categorieId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  modificationCategorie(categorieId){
   this.categoriee=this.categorieService.getCategorie(categorieId);

   this.categoriee.subscribe((value:Categorie)=>{
   this.categorieVariable["id"]=value.id;
   this.categorieVariable["labelle"]=value.labelle;
   this.categorieVariable["image"]=value.image;
  
   
 });

  
  }

 
  onSubmit(form){
//alert(this.userVariable["nom"]);
var categorieObject :Categorie;
var categorieObject= new Categorie();
categorieObject.id=this.categorieVariable["id"];
categorieObject.labelle=this.categorieVariable["labelle"];
categorieObject.image=this.categorieVariable["image"];

this.categorieService.updateCategorie(this.categorieVariable["id"], categorieObject).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onAddCategorie(){

    var categorieObject :Categorie;
    categorieObject= new Categorie();
    categorieObject.id=this.categorieVariable1["id"];
    categorieObject.labelle=this.categorieVariable1["labelle"];
    categorieObject.image=this.categorieVariable1["image"];
  
 
    
    
    
        this.categorieService.createCategorie(categorieObject).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
      }
 

}
