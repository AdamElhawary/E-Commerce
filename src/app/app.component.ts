import { Component,OnInit } from '@angular/core';
import {CartService } from './services/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products';
  count:number = 0;
  constructor(private cartService:CartService) {}

  ngOnInit(): void {
    this.count=  this.cartService.currentCount
 }
 
}
