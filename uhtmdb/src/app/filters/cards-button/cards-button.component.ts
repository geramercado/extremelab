import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cards-button',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './cards-button.component.html',
  styleUrl: './cards-button.component.css'
})
export class CardsButtonComponent {

}
