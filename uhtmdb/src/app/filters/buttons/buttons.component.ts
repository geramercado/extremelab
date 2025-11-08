import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { ClasificationService } from '../../services/clasification.service';
import { Clasification, Property } from '../../interface/clasification.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule
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
  valueStart: number = 0;
  valueEnd: number = 0;
  constructor(private clasificationService: ClasificationService) {}

  onShowSidebar(){
    this.showSidebar = !this.showSidebar;
    if (this.showSidebar) {
      document.body.style.overflow = 'hidden'; //background scroll locked
    } else {
      document.body.style.overflow = ''; //unlocked
    }
  }


  // Get all
  loadClasifications() {
    this.clasificationService.getClasification().subscribe(data => {
      this.clasifications = data.map((c: any) => ({
        ...c,
        properties: c.properties.map((p: any) => ({
          ...p,
          startValue: p.min,
          endValue: p.max
        }))
      }));
        
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

  //trackBy
  trackByFn(index: number, item: any): number {
    console.log('trackBy llamado para', item.name);
    return item.id;
  }
  
  resetAll() {
    this.clasificationSelected?.properties.forEach(p => {
      p.startValue = p.min;
      p.endValue = p.max;
    });
  }

  resetLocal(property: any) {
    property.startValue = property.min;
    property.endValue = property.max;
  }
  

}
