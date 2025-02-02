import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RatingPipe } from '../rating.pipe';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../types/product';


@Component({
  selector: 'app-product-card',
  imports: [NgClass, CommonModule, RatingPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product : any
  counter: number  = 0


  cartservice = inject(CartService)
  constructor (private router: Router) {}

  ngOnInit() {
    this.cartservice.getCounter().subscribe(res => this.counter = res)
  }

  addToCart(product: Product){
    this.cartservice.addItemsToCart(product);
    console.log(product)
  }



  handelToDetails(id: number) {
    this.router.navigate(['/product-details', id])
  }
}
