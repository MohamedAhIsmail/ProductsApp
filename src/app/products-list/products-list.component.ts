import { Component } from '@angular/core';
// import {products} from '../../../src/products.json';
import { ProductCardComponent } from '../product-card/product-card.component';
// import { Product } from '../types/product';
import { ProductRequestsService } from '../services/product-requests.service';
@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  // products : Product[]= products

  products: any;


  constructor(private productsRequestService : ProductRequestsService) {

  }

  ngOnInit() {
    this.productsRequestService.getProducts().subscribe((res: any)=> this.products = res.products)
  }


}
