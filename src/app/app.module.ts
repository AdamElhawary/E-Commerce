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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { PricePipe } from './pipes/price.pipe';
import { WishListComponent } from './wish-list/wish-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/WishList/WishList.reducer';
import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment';
import { MemberOnlyComponent } from './member-only/member-only.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReqInterceptor } from './interceptors/req.interceptor';
import { NgSpinnerModule } from 'ng-bootstrap-spinner';
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
    MemberOnlyComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule,
    SharedModule,
    NgSpinnerModule,
    StoreModule.forRoot({ WishList: reducer }),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
