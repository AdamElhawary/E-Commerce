import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any | IProduct[] = [];

  constructor() {}
  count: any = new BehaviorSubject(this.items.length);
  currentCount = this.count.asObservable();
  updateWishlistCounter(newCounterValue: any) {
    this.count.next(newCounterValue);
  }
//update Q counter
  updateCounter() {
    let quantitiy: number = 0;
    this.items.forEach((e: IProduct) => {
      if (e.q) {
        quantitiy += e.q;
      }
    });
    this.updateWishlistCounter(quantitiy);
  }

  getItems() {
    return this.items;
  }

  addToCart(product: IProduct) {
    
   !this.items.filter((e:any)=>e.id === product.id).length&& this.items.push({ ...product, q: 1 });
    this.updateCounter();
  }
  removeItem(id: any) {
    this.items = this.items.filter((e: any) => e.id !== +id);
    this.updateCounter();
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  
  increaseQuantity(id: any) {
    let product = this.items.filter((e: IProduct) => e.id == id)[0];
    this.removeItem(`${id}`);
    product.q++;
    this.items.push(product);
    this.updateCounter();
  }
  decreaseQuantity(id: any) {
    let product = this.items.filter((e: IProduct) => e.id == id)[0];
    this.removeItem(`${id}`);
    if (product.q) {
      product.q--;
    }
    this.items.push(product);
    this.updateCounter();
  }
}

interface IProduct {
  id: any;
  title: string;
  price: any;
  description: string;
  category: string;
  image: string;
  rating: IRate;
  q?: number;
}
interface IRate {
  rate: number;
  count: number;
}
