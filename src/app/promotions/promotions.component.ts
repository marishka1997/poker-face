import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent {
  promotions = [
    {
      id: '1',
      src:'../../assets/promo1.PNG',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'../../assets/promo2.PNG',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'../../assets/promo3.PNG',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'../../assets/promo1.PNG',
      alt:'Side 4',
      title:'Side 4'
    },
  ]

  constructor() { }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3.5,
      },
      400: {
        items: 3.5,
      },
      740: {
        items: 3.5,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
}
