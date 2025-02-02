import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, discountPercentage: number): number {
    const discount = (discountPercentage * value) /100
    return value - discount
  }

}
