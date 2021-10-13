import { Component, OnInit } from '@angular/core';
import {ProductServService } from '../services/product-serv.service';
import {CartService } from '../services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  Products : any;
  constructor(private productService:ProductServService,private cartService:CartService) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(response => {
      this.Products = response;
    });
}
addToCartLocal(product:any){
  this.cartService.addToCart(product);
}


}
