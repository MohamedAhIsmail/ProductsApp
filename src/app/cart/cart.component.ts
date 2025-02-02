import { Component, inject } from '@angular/core';
import { Product } from '../types/product';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[] = []
  counter: number = 0
  totalPrice: number  = 0

  cartService = inject(CartService)

  constructor() {}




  ngOnInit() {

    this.cartService.getCartItems()
    this.showCart()
  }

  showCart(){
    this.cartItems = this.cartService.getCartItems();
    this.counter = this.cartItems.length;
    for(let item of this.cartItems){
      item.counter = 1;
    }
  }


  plusQuantity(item: Product){
    if (item.counter < item.stock){
      item.counter++;
    }
    this.carTotalPrice();

    }

  negativeQuantity(item: Product){
    if(item.counter && item.counter > 1) {
      item.counter--;
    }
    this.carTotalPrice();
  }

  deleteItem(item: Product) {
    this.cartService.deleteCartItem(item);
    this.showCart();
  }

  carTotalPrice(): number {
    return  this.cartItems.reduce((total, item) => {
      return total + item.price * item.counter;
    }, 0);
  }
}
