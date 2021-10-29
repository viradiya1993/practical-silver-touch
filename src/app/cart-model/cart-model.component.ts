import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/_serivces/product.service';

@Component({
  selector: 'app-cart-model',
  templateUrl: './cart-model.component.html',
  styleUrls: ['./cart-model.component.scss']
})
export class CartModelComponent implements OnInit {
  /** selected food for modal popup and items */
  @Input() selectedFood: any;
  @Input() addItems: any;
  constructor(private model: NgbActiveModal, public productservice: ProductService) { }

  ngOnInit(): void {
  }


  /** add item to basket */
  addToBasket(): void {
    this.productservice.selectedItems.next(this.addItems);
    this.model.close();
  }

  /** Close model */
  activeModal() {
    this.model.close();
  }
}
