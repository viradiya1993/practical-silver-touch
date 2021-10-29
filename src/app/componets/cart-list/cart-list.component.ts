import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/_serivces/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: any = []
  constructor(public productservice: ProductService) { }

  ngOnInit(): void {
    /** get foods list from service */
    this.products = this.productservice.product;
  }

}
