import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { PricePipe } from './pipes/price.pipe';
import { WishListComponent } from './wish-list/wish-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/WishList/WishList.reducer';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductDetailComponentComponent,
    CartComponent,
    PricePipe,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule,
    StoreModule.forRoot({ WishList: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
