import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { MemberOnlyComponent } from './member-only/member-only.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user', component: MemberOnlyComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'product-detail/:id', component: ProductDetailComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
