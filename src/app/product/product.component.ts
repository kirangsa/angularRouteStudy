import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) {
   this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

}
