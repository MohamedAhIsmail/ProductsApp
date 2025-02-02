import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: ProductsListComponent,
    title: "Products List"
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: "Home Page"
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: "Register"
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Login"
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "Cart"
  },
  {
    path:'settings',
    component: SettingsComponent,
    title: "Settings"
  },
  {
    path:"**",
    component:NotFoundComponent,
    title: "Not Found"
  }
];
