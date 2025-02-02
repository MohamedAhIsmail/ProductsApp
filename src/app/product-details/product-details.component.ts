import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Product } from '../types/product';
// import {products} from '../../../src/products.json';
import { RatingPipe } from '../rating.pipe';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../discount.pipe';
import { ProductRequestsService } from '../services/product-requests.service';
@Component({
  selector: 'app-product-details',
  imports: [RatingPipe, CommonModule, DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  // productsData: Product[] = products
  // products: Array<Product> = products
  // product!: Product
// id: string = ''
@Input() id : string = '';
product : any;


  constructor (private productsRequestService : ProductRequestsService, private route: ActivatedRoute, private router : Router) {}


  ngOnChange() {
    console.log(this.route.snapshot.params["id"])
  }

  // ngOnInit() {
  //   // console.log(this.activatedRoute.snapshot.params["id"])
  //   // console.log(this.productsData.find( product => product.id === Number(this.activatedRoute.snapshot.params["id"])))
  //   // this.product = this.productsData.find( product => product.id === Number(this.activatedRoute.snapshot.params["id"]))!
  //   console.log(this.id);

  //   this.productsRequestService.getProductDetails(this.id).subscribe((res)=>console.log(res)
  //   )
  // }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.productsRequestService.getProductDetails(this.id).subscribe((res) => this.product = res);
  }

}
