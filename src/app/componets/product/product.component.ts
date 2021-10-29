import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartModelComponent } from 'src/app/cart-model/cart-model.component';
import { ProductService } from 'src/_serivces/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any = []
  constructor(public productservice: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    /** get foods list from service */
    this.products = this.productservice.product;
  }

  /**
   * open modal popup for select extra items
   */
  open(data: any) {
    const modalRef = this.modalService.open(CartModelComponent, { size: 'md', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.selectedFood = data;
    modalRef.componentInstance.addItems = [{ name: data.productname, quantity: data.quantity, price: data.price }];
  }

}
