import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SliderComponent } from '../slider/slider.component';

import { register } from 'swiper/element/bundle'; 

register();

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ 
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    SliderComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
