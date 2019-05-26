import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/Product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

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

}
