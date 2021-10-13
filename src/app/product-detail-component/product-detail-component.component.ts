import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductServService } from '../services/product-serv.service';
import {CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls: ['./product-detail-component.component.scss'],
})
export class ProductDetailComponentComponent implements OnInit {
  product_id: string;
  product: any = {};
  addedToCart:boolean=false;
  constructor(private actRoute: ActivatedRoute,private cartService:CartService,private service:ProductServService) {
    this.product_id = this.actRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.service.getProduct(this.product_id)
    .subscribe(response => {
      this.product = response;
    });
    this.addedToCart = this.cartService.getItems().filter((e:any)=>e.id==+this.product_id).length?true:false
  }
  addToCartLocal(product:any){
    this.cartService.addToCart(product);
    this.addedToCart=true
  }
  removeItemLocal(id:any){
  this.cartService.removeItem(id);
  this.addedToCart=false
  }
}
