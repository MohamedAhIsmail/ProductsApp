import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCounter = new BehaviorSubject<number>(0)
  private cartItems : Product[] = [];

  constructor() { }

  getCounter(){
    return this.cartCounter.asObservable();
  }

  UpdateCounter(newValue : number){
    return this.cartCounter.next(newValue);
  }

  addItemsToCart(item : Product){
    const exists = this.cartItems.find((product) => product.id == item.id);
    if(!exists){
      this.cartItems.push(item)
    }
    this.UpdateCounter(this.cartItems.length);
  }

  getCartItems(){
    return this.cartItems;
  }

  deleteCartItem(item: Product) {
    this.cartItems = this.cartItems.filter((product)=> product.id !== item.id);
    this.UpdateCounter(this.cartItems.length)
  }

}
