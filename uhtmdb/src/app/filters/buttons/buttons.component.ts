import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { ClasificationService } from '../../services/clasification.service';
import { Clasification } from '../../interface/clasification.model';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatInputModule
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  /*
  selectedFilter: any = null;
  showRange = false;

  filters = [
    { title: 'Shear modulus', content: 'Contenido de la card 1', min: 10, max: 30, unit: 'm', valueInitial: 10, valueFinal: 30 },
    { title: 'Youngs modulus', content: 'Contenido de la card 2', min: 5, max: 40, unit: 'm', valueInitial: 5, valueFinal: 40 },
    { title: 'Fracture toughness', content: 'Contenido de la card 3', min: 2, max: 50, unit: 'm', valueInitial: 2, valueFinal: 50 },
    { title: 'Flexural Strength', content: 'Contenido de la card 4', min: 0, max: 40, unit: 'm', valueInitial: 0, valueFinal: 40 },
    { title: 'Hardness', content: 'Contenido de la card 5', min: 0, max: 80, unit: 'm', valueInitial: 0, valueFinal: 80 },
    { title: 'Boundary Adhesion', content: 'Contenido de la card 6', min: 40, max: 90, unit: 'm',  valueInitial: 40, valueFinal: 90 }
    
  ];

  selectFilter(filter: any) {
    this.selectedFilter = this.selectedFilter === filter ? null : filter;
  }
    */

  

  clasifications: Clasification[] = [];

  clasificationSelected?: Clasification;

  showSidebar = false;

  constructor(private clasificationService: ClasificationService) {}

  // To show sidebar
  onShowSidebar(){
    this.showSidebar = !this.showSidebar;
  }

  // Get all
  loadClasifications() {
    this.clasificationService.getClasification().subscribe(data => {
      this.clasifications = data;
    });
    
  }

  // Get by id
  loadClasificationById(id: number) {
    this.clasificationService.getClasificationById(id).subscribe(data => {
      this.clasificationSelected = data;
    });
  }

  // To switch value in main variable
  selectClasification(clasification: any) {
    this.clasificationSelected = this.clasificationSelected === clasification ? null : clasification;
  }

  //range in inputs mat-slider
  
  

}
