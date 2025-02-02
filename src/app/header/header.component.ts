import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive  } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
cartCounter = 0
constructor(private cartService: CartService) {}


ngOnInit() {
  this.cartService.getCounter().subscribe((res)=> this.cartCounter = res)
}
}