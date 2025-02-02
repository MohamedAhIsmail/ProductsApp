import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    // if (value < 0 || value > 5) return 'Invalid rating';

    const fullStars = Math.floor(value);
    const emptyStars = 5 - fullStars;

    return '⭐'.repeat(fullStars) + '☆'.repeat(emptyStars);
  }
}
