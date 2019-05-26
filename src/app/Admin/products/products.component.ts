import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;
   

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.reloadData();
 }


 

  reloadData() {
    this.products = this.productService.getProductsList();
  }

}
