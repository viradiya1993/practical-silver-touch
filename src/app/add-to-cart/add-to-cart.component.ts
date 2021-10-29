import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/_serivces/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  /** selected food list */
  selectedFoods: any;
  constructor(public productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.selectedItems.subscribe((res: any) => {
      this.selectedFoods = res[0];
    });
  }

}
