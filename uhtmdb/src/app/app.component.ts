import { Component, inject } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    NavigationBarComponent,
    MatIconModule,
    MatButtonModule
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uhtmdb';
}
