import { Component } from '@angular/core';

import { FooterComponent } from '../mainPage/footer/footer.component';
import { NavigationBarComponent } from '../mainPage/navigation-bar/navigation-bar.component';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {

}
