import { Component, OnInit } from '@angular/core';
import { ProductServService } from '../services/product-serv.service';
import { CartService } from '../services/cart.service';
import { Store } from '@ngrx/store';
import { setWishList } from 'src/app/store/WishList/WishList.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  Products: any;
  wishListItems: any = [];
  clickedIndex: any = [];
  constructor(
    private productService: ProductServService,
    private cartService: CartService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.Products = response;
    });
  }
  addToCartLocal(product: any) {
    this.cartService.addToCart(product);
  }
  addToWishList(product: any, index: number) {
    if (this.wishListItems.filter((e: any) => e.id === product.id).length) {
      this.clickedIndex = this.clickedIndex.filter((e: any) => e !== index);
      let newWishList = this.wishListItems.filter(
        (e: any) => e.id !== product.id
      );
      this.wishListItems = newWishList;
      this.store.dispatch(
        setWishList({
          items: newWishList.map((e: any) => e),
          count: newWishList.length,
        })
      );
    } else {
      this.clickedIndex.push(index);
      this.wishListItems.push(product);
      this.store.dispatch(
        setWishList({
          items: this.wishListItems.map((e: any) => e),
          count: this.wishListItems.length,
        })
      );
    }
    console.log(this.clickedIndex);
  }
}
