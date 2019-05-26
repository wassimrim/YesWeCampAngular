import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';
import { ProductService } from './product.service';
import { User } from '../profile/User';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>;
 

  productt:Observable<Object>;

   productVariable: Array<any>=[];

   productVariable1: Array<any>=[];
   

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.reloadData();

  }


  reloadData() {
    this.products = this.productService.getProductsList();
  }

  suppressionProduct(productId) {
   
    this.productService.deleteProduct(productId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  modificationProduct(evenementId){
   this.productt=this.productService.getProduct(evenementId);

   this.productt.subscribe((value:Product)=>{
   this.productVariable["id"]=value.id;
   this.productVariable["description"]=value.description;
   this.productVariable["labelle"]=value.labelle;
   this.productVariable["prix"]=value.prix;
   this.productVariable["quantite"]=value.quantite;
   this.productVariable["image"]=value.image;
   this.productVariable["user"]=value.user.id;
   
 });

  
  }

 
  onSubmit(form){
//alert(this.userVariable["nom"]);
var productObject :Product;
productObject= new Product();
var userObject : User;
var  userObject = new User();
userObject.id=parseInt(localStorage.getItem("idUser"),10);
productObject.id=this.productVariable["id"];
productObject.description=this.productVariable["description"];
productObject.labelle=this.productVariable["labelle"];
productObject.prix=this.productVariable["prix"];
productObject.quantite=this.productVariable["quantite"];
productObject.image=this.productVariable["image"];
productObject.user=userObject;



    this.productService.updateProduct(this.productVariable["id"], productObject).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onAddProduct(){
    //alert(this.userVariable["nom"]);
    var productObject :Product;
productObject= new Product();
var userObject : User;
var  userObject = new User();
userObject.id=parseInt(localStorage.getItem("idUser"),10);
productObject.id=this.productVariable1["id"];
productObject.description=this.productVariable1["description"];
productObject.labelle=this.productVariable1["labelle"];
productObject.prix=this.productVariable1["prix"];
productObject.quantite=this.productVariable1["quantite"];
productObject.image=this.productVariable1["image"];
productObject.user=userObject;
    
    
    
        this.productService.createProduct(productObject).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
      }
 

}
