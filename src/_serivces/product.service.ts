import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  /** Product Array  */
  product = [
    {
      id: 1, productname: 'Bundle', price: 10, quantity: 10
    },
    {
      id: 2, productname: 'Starters', price: 20, quantity: 5
    },
    {
      id: 3, productname: 'Main Dishes', price: 5, quantity: 8
    },
    {
      id: 4, productname: 'Family bundle', price: 10, quantity: 7
    },
    {
      id: 5, productname: 'Slides', price: 8, quantity: 4
    },
    {
      id: 6, productname: 'Desserts', price: 100, quantity: 8
    },
    {
      id: 7, productname: 'Desserts', price: 50, quantity: 8
    },
    {
      id: 8, productname: 'Desserts', price: 80, quantity: 8
    },
    {
      id: 9, productname: 'Desserts', price: 150, quantity: 8
    },
    {
      id: 10, productname: 'Desserts', price: 60, quantity: 8
    },
  ]

  // Subject for get item from selected list
  selectedItems = new Subject<any>();
}
