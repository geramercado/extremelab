import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

import { FooterComponent } from '../footer/footer.component';

import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    FooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})

export class SliderComponent implements OnInit{

  longText = 'text to show an example for description'
  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {

    const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      breakpoints: {
        640:{ slidesPerView: 2, },
        1024:{ slidesPerView: 4, }
      },
      pagination: {
        clickable: true,
        type: 'progressbar'
      },
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor);
    this.swiperElement()?.initialize();
  }

}
