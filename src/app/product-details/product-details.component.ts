import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product$: any;
  product1$: any;
  constructor(public route: ActivatedRoute, public router: Router, public productService: ProductService) {
    this.product$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      const id: any = this.productService.getProduct(params.get('id'));
      return id;
    }));
  }

  ngOnInit() {
    // const id1 = this.route.snapshot.paramMap.get('id');
    // this.productService.getProduct(id1).subscribe(x => {
    //   this.product1$ = x;
    // });
  }

}
