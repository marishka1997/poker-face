import { Component } from '@angular/core';

@Component({
  selector: 'app-malta-festival',
  templateUrl: './malta-festival.component.html',
  styleUrls: ['./malta-festival.component.css']
})
export class MaltaFestivalComponent {
  categories = [
    [
      'A',
      'ორმხრივი ავიაბილეთი',
      'The Festival in Malta-ს მეინ ივენთის ბაი-ინი',
      'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი',
      'სასტუმრო Golden Tulip Vivaldi Hotel',
      '€500 სახარჯი ფული',
    ],
    [
      'B',
      'ორმხრივი ავიაბილეთი',
      'The Festival in Malta-ს მეინ ივენთის ბაი-ინი',
      'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი',
      'სასტუმრო Golden Tulip Vivaldi Hotel',
      '€500 სახარჯი ფული',
    ],
  ];

  thirdcategory = [
    'C',
    'ორმხრივი ავიაბილეთი',
    'The Festival in Malta-ს მეინ ივენთის ბაი-ინი',
    'სასტუმრო',
    '€500 სახარჯი ფული',
  ];

  icons = [
    '../../assets/final-item-event-icon.png',
    '../../assets/final-item-event-icon.png',
    '../../assets/final-item-hotel-icon.png',
    '../../assets/final-item-ticket-icon.png',
    '../../assets/final-item-money-icon.png',
  ];
}
