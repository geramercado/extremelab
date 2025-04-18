import { Component, inject } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { RouterOutlet } from '@angular/router';

import { NavigationBarComponent } from './mainPage/navigation-bar/navigation-bar.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    NavigationBarComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uhtmdb';
}
