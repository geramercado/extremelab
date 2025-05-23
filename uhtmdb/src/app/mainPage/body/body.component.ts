import { Component, inject, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { SliderComponent } from '../slider/slider.component';
import { register } from 'swiper/element/bundle'; 
register();

import { ThemeService } from '../../services/theme.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ 
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    SliderComponent,
    RouterLink
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  themeService: ThemeService = inject(ThemeService);
  
}
