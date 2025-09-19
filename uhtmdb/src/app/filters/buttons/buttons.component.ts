import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  showSidebar = false;
  selectedFilter: any = null;
  showRange = false;

  filters = [
    { title: 'Shear modulus', content: 'Contenido de la card 1', min: 10, max: 30, unit: 'm', valueInitial: 10 },
    { title: 'Youngs modulus', content: 'Contenido de la card 2', min: 5, max: 40, unit: 'm', valueInitial: 5 },
    { title: 'Fracture toughness', content: 'Contenido de la card 3', min: 2, max: 50, unit: 'm', valueInitial: 2 },
    { title: 'Flexural Strength', content: 'Contenido de la card 4', min: 0, max: 40, unit: 'm', valueInitial: 0 },
    { title: 'Hardness', content: 'Contenido de la card 5', min: 0, max: 80, unit: 'm', valueInitial: 0 },
    { title: 'Boundary Adhesion', content: 'Contenido de la card 6', min: 40, max: 90, unit: 'm', valueInitial: 40 }
    
  ];

  onFirstButtonClick() {
    this.showSidebar = !this.showSidebar;
  }

  selectFilter(filter: any) {
    this.selectedFilter = this.selectedFilter === filter ? null : filter;
  }



}
