import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


import { FooterComponent } from '../../mainPage/footer/footer.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { TablesComponent } from '../tables/tables.component';
import { CardsButtonComponent } from '../cards-button/cards-button.component';

import { EventEmitter, Output } from '@angular/core';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} 
from '@angular/material/dialog';
import { MatGridListModule } from "@angular/material/grid-list";


@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    FooterComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    ButtonsComponent,
    TablesComponent,
    CardsButtonComponent,
],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputsComponent {

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PeriodicTable, {
      panelClass: 'matdialog-conf',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}

@Component({
  standalone: true,
  selector: 'periodic-table',
  templateUrl: 'periodic-table.html',
  styleUrl: './periodic-table-style.css',
  imports: [
    MatButtonModule,
    CommonModule
    //MatDialogActions,
    //MatDialogClose
    ,
    MatGridListModule
],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PeriodicTable {

  hoveredElement: any = null;

  @Output() elementSelected = new EventEmitter<string[]>();

  
  elements = [
    { symbol: 'H',  name: 'Hydrogen',     atomicNumber: 1,  period: 1,  group: 1,  category: 'nonmetal' },
    { symbol: 'He', name: 'Helium',       atomicNumber: 2,  period: 1,  group: 18, category: 'noble-gas' },
    { symbol: 'Li', name: 'Lithium',      atomicNumber: 3,  period: 2,  group: 1,  category: 'alkali-metal' },
    { symbol: 'Be', name: 'Beryllium',    atomicNumber: 4,  period: 2,  group: 2,  category: 'alkaline-earth-metal' },
    { symbol: 'B',  name: 'Boron',        atomicNumber: 5,  period: 2,  group: 13, category: 'metalloid' },
    { symbol: 'C',  name: 'Carbon',       atomicNumber: 6,  period: 2,  group: 14, category: 'nonmetal' },
    { symbol: 'N',  name: 'Nitrogen',     atomicNumber: 7,  period: 2,  group: 15, category: 'nonmetal' },
    { symbol: 'O',  name: 'Oxygen',       atomicNumber: 8,  period: 2,  group: 16, category: 'nonmetal' },
    { symbol: 'F',  name: 'Fluorine',     atomicNumber: 9,  period: 2,  group: 17, category: 'halogen' },
    { symbol: 'Ne', name: 'Neon',         atomicNumber: 10, period: 2,  group: 18, category: 'noble-gas' },
    { symbol: 'Na', name: 'Sodium',       atomicNumber: 11, period: 3,  group: 1,  category: 'alkali-metal' },
    { symbol: 'Mg', name: 'Magnesium',    atomicNumber: 12, period: 3,  group: 2,  category: 'alkaline-earth-metal' },
    { symbol: 'Al', name: 'Aluminium',    atomicNumber: 13, period: 3,  group: 13, category: 'post-transition-metal' },
    { symbol: 'Si', name: 'Silicon',      atomicNumber: 14, period: 3,  group: 14, category: 'metalloid' },
    { symbol: 'P',  name: 'Phosphorus',   atomicNumber: 15, period: 3,  group: 15, category: 'nonmetal' },
    { symbol: 'S',  name: 'Sulfur',       atomicNumber: 16, period: 3,  group: 16, category: 'nonmetal' },
    { symbol: 'Cl', name: 'Chlorine',     atomicNumber: 17, period: 3,  group: 17, category: 'halogen' },
    { symbol: 'Ar', name: 'Argon',        atomicNumber: 18, period: 3,  group: 18, category: 'noble-gas' },
    { symbol: 'K',  name: 'Potassium',    atomicNumber: 19, period: 4,  group: 1,  category: 'alkali-metal' },
    { symbol: 'Ca', name: 'Calcium',      atomicNumber: 20, period: 4,  group: 2,  category: 'alkaline-earth-metal' },
    { symbol: 'Sc', name: 'Scandium',     atomicNumber: 21, period: 4,  group: 3,  category: 'transition-metal' },
    { symbol: 'Ti', name: 'Titanium',     atomicNumber: 22, period: 4,  group: 4,  category: 'transition-metal' },
    { symbol: 'V',  name: 'Vanadium',     atomicNumber: 23, period: 4,  group: 5,  category: 'transition-metal' },
    { symbol: 'Cr', name: 'Chromium',     atomicNumber: 24, period: 4,  group: 6,  category: 'transition-metal' },
    { symbol: 'Mn', name: 'Manganese',    atomicNumber: 25, period: 4,  group: 7,  category: 'transition-metal' },
    { symbol: 'Fe', name: 'Iron',         atomicNumber: 26, period: 4,  group: 8,  category: 'transition-metal' },
    { symbol: 'Co', name: 'Cobalt',       atomicNumber: 27, period: 4,  group: 9,  category: 'transition-metal' },
    { symbol: 'Ni', name: 'Nickel',       atomicNumber: 28, period: 4,  group: 10, category: 'transition-metal' },
    { symbol: 'Cu', name: 'Copper',       atomicNumber: 29, period: 4,  group: 11, category: 'transition-metal' },
    { symbol: 'Zn', name: 'Zinc',         atomicNumber: 30, period: 4,  group: 12, category: 'transition-metal' },
    { symbol: 'Ga', name: 'Gallium',      atomicNumber: 31, period: 4,  group: 13, category: 'post-transition-metal' },
    { symbol: 'Ge', name: 'Germanium',    atomicNumber: 32, period: 4,  group: 14, category: 'metalloid' },
    { symbol: 'As', name: 'Arsenic',      atomicNumber: 33, period: 4,  group: 15, category: 'metalloid' },
    { symbol: 'Se', name: 'Selenium',     atomicNumber: 34, period: 4,  group: 16, category: 'nonmetal' },
    { symbol: 'Br', name: 'Bromine',      atomicNumber: 35, period: 4,  group: 17, category: 'halogen' },
    { symbol: 'Kr', name: 'Krypton',      atomicNumber: 36, period: 4,  group: 18, category: 'noble-gas' },
    { symbol: 'Rb', name: 'Rubidium',     atomicNumber: 37, period: 5,  group: 1,  category: 'alkali-metal' },
    { symbol: 'Sr', name: 'Strontium',    atomicNumber: 38, period: 5,  group: 2,  category: 'alkaline-earth-metal' },
    { symbol: 'Y',  name: 'Yttrium',      atomicNumber: 39, period: 5,  group: 3,  category: 'transition-metal' },
    { symbol: 'Zr', name: 'Zirconium',    atomicNumber: 40, period: 5,  group: 4,  category: 'transition-metal' },
    { symbol: 'Nb', name: 'Niobium',      atomicNumber: 41, period: 5,  group: 5,  category: 'transition-metal' },
    { symbol: 'Mo', name: 'Molybdenum',   atomicNumber: 42, period: 5,  group: 6,  category: 'transition-metal' },
    { symbol: 'Tc', name: 'Technetium',   atomicNumber: 43, period: 5,  group: 7,  category: 'transition-metal' },
    { symbol: 'Ru', name: 'Ruthenium',    atomicNumber: 44, period: 5,  group: 8,  category: 'transition-metal' },
    { symbol: 'Rh', name: 'Rhodium',      atomicNumber: 45, period: 5,  group: 9,  category: 'transition-metal' },
    { symbol: 'Pd', name: 'Palladium',    atomicNumber: 46, period: 5,  group: 10, category: 'transition-metal' },
    { symbol: 'Ag', name: 'Silver',       atomicNumber: 47, period: 5,  group: 11, category: 'transition-metal' },
    { symbol: 'Cd', name: 'Cadmium',      atomicNumber: 48, period: 5,  group: 12, category: 'transition-metal' },
    { symbol: 'In', name: 'Indium',       atomicNumber: 49, period: 5,  group: 13, category: 'post-transition-metal' },
    { symbol: 'Sn', name: 'Tin',          atomicNumber: 50, period: 5,  group: 14, category: 'post-transition-metal' },
    { symbol: 'Sb', name: 'Antimony',     atomicNumber: 51, period: 5,  group: 15, category: 'metalloid' },
    { symbol: 'Te', name: 'Tellurium',    atomicNumber: 52, period: 5,  group: 16, category: 'metalloid' },
    { symbol: 'I',  name: 'Iodine',       atomicNumber: 53, period: 5,  group: 17, category: 'halogen' },
    { symbol: 'Xe', name: 'Xenon',        atomicNumber: 54, period: 5,  group: 18, category: 'noble-gas' },
    { symbol: 'Cs', name: 'Caesium',      atomicNumber: 55, period: 6,  group: 1,  category: 'alkali-metal' },
    { symbol: 'Ba', name: 'Barium',       atomicNumber: 56, period: 6,  group: 2,  category: 'alkaline-earth-metal' },
    { symbol: 'La', name: 'Lanthanum',    atomicNumber: 57, period: 9,  group: 4,  category: 'lanthanide' },
    { symbol: 'Ce', name: 'Cerium',       atomicNumber: 58, period: 9,  group: 5,  category: 'lanthanide' },
    { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, period: 9,  group: 6,  category: 'lanthanide' },
    { symbol: 'Nd', name: 'Neodymium',    atomicNumber: 60, period: 9,  group: 7,  category: 'lanthanide' },
    { symbol: 'Pm', name: 'Promethium',   atomicNumber: 61, period: 9,  group: 8,  category: 'lanthanide' },
    { symbol: 'Sm', name: 'Samarium',     atomicNumber: 62, period: 9,  group: 9,  category: 'lanthanide' },
    { symbol: 'Eu', name: 'Europium',     atomicNumber: 63, period: 9,  group: 10, category: 'lanthanide' },
    { symbol: 'Gd', name: 'Gadolinium',   atomicNumber: 64, period: 9,  group: 11, category: 'lanthanide' },
    { symbol: 'Tb', name: 'Terbium',      atomicNumber: 65, period: 9,  group: 12, category: 'lanthanide' },
    { symbol: 'Dy', name: 'Dysprosium',   atomicNumber: 66, period: 9,  group: 13, category: 'lanthanide' },
    { symbol: 'Ho', name: 'Holmium',      atomicNumber: 67, period: 9,  group: 14, category: 'lanthanide' },
    { symbol: 'Er', name: 'Erbium',       atomicNumber: 68, period: 9,  group: 15, category: 'lanthanide' },
    { symbol: 'Tm', name: 'Thulium',      atomicNumber: 69, period: 9,  group: 16, category: 'lanthanide' },
    { symbol: 'Yb', name: 'Ytterbium',    atomicNumber: 70, period: 9,  group: 17, category: 'lanthanide' },
    { symbol: 'Lu', name: 'Lutetium',     atomicNumber: 71, period: 9,  group: 18, category: 'lanthanide' },
    { symbol: 'Hf', name: 'Hafnium',      atomicNumber: 72, period: 6,  group: 4,  category: 'transition-metal' },
    { symbol: 'Ta', name: 'Tantalum',     atomicNumber: 73, period: 6,  group: 5,  category: 'transition-metal' },
    { symbol: 'W',  name: 'Tungsten',     atomicNumber: 74, period: 6,  group: 6,  category: 'transition-metal' },
    { symbol: 'Re', name: 'Rhenium',      atomicNumber: 75, period: 6,  group: 7,  category: 'transition-metal' },
    { symbol: 'Os', name: 'Osmium',       atomicNumber: 76, period: 6,  group: 8,  category: 'transition-metal' },
    { symbol: 'Ir', name: 'Iridium',      atomicNumber: 77, period: 6,  group: 9,  category: 'transition-metal' },
    { symbol: 'Pt', name: 'Platinum',     atomicNumber: 78, period: 6,  group: 10, category: 'transition-metal' },
    { symbol: 'Au', name: 'Gold',         atomicNumber: 79, period: 6,  group: 11, category: 'transition-metal' },
    { symbol: 'Hg', name: 'Mercury',      atomicNumber: 80, period: 6,  group: 12, category: 'transition-metal' },
    { symbol: 'Tl', name: 'Thallium',     atomicNumber: 81, period: 6,  group: 13, category: 'post-transition-metal' },
    { symbol: 'Pb', name: 'Lead',         atomicNumber: 82, period: 6,  group: 14, category: 'post-transition-metal' },
    { symbol: 'Bi', name: 'Bismuth',      atomicNumber: 83, period: 6,  group: 15, category: 'post-transition-metal' },
    { symbol: 'Po', name: 'Polonium',     atomicNumber: 84, period: 6,  group: 16, category: 'metalloid' },
    { symbol: 'At', name: 'Astatine',     atomicNumber: 85, period: 6,  group: 17, category: 'halogen' },
    { symbol: 'Rn', name: 'Radon',        atomicNumber: 86, period: 6,  group: 18, category: 'noble-gas' },
    { symbol: 'Fr', name: 'Francium',     atomicNumber: 87, period: 7,  group: 1,  category: 'alkali-metal' },
    { symbol: 'Ra', name: 'Radium',       atomicNumber: 88, period: 7,  group: 2,  category: 'alkaline-earth-metal' },
    { symbol: 'Ac', name: 'Actinium',     atomicNumber: 89, period: 10, group: 4,  category: 'actinide' },
    { symbol: 'Th', name: 'Thorium',      atomicNumber: 90, period: 10, group: 5,  category: 'actinide' },
    { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, period: 10, group: 6,  category: 'actinide' },
    { symbol: 'U',  name: 'Uranium',      atomicNumber: 92, period: 10, group: 7,  category: 'actinide' },
    { symbol: 'Np', name: 'Neptunium',    atomicNumber: 93, period: 10, group: 8,  category: 'actinide' },
    { symbol: 'Pu', name: 'Plutonium',    atomicNumber: 94, period: 10, group: 9,  category: 'actinide' },
    { symbol: 'Am', name: 'Americium',    atomicNumber: 95, period: 10, group: 10, category: 'actinide' },
    { symbol: 'Cm', name: 'Curium',       atomicNumber: 96, period: 10, group: 11, category: 'actinide' },
    { symbol: 'Bk', name: 'Berkelium',    atomicNumber: 97, period: 10, group: 12, category: 'actinide' },
    { symbol: 'Cf', name: 'Californium',  atomicNumber: 98, period: 10, group: 13, category: 'actinide' },
    { symbol: 'Es', name: 'Einsteinium',  atomicNumber: 99, period: 10, group: 14, category: 'actinide' },
    { symbol: 'Fm', name: 'Fermium',      atomicNumber: 100, period: 10, group: 15, category: 'actinide' },
    { symbol: 'Md', name: 'Mendelevium',  atomicNumber: 101, period: 10, group: 16, category: 'actinide' },
    { symbol: 'No', name: 'Nobelium',     atomicNumber: 102, period: 10, group: 17, category: 'actinide' },
    { symbol: 'Lr', name: 'Lawrencium',   atomicNumber: 103, period: 10, group: 18, category: 'actinide' },
    { symbol: 'Rf', name: 'Rutherfordium',atomicNumber: 104, period: 7,  group: 4,  category: 'transition-metal' },
    { symbol: 'Db', name: 'Dubnium',      atomicNumber: 105, period: 7,  group: 5,  category: 'transition-metal' },
    { symbol: 'Sg', name: 'Seaborgium',   atomicNumber: 106, period: 7,  group: 6,  category: 'transition-metal' },
    { symbol: 'Bh', name: 'Bohrium',      atomicNumber: 107, period: 7,  group: 7,  category: 'transition-metal' },
    { symbol: 'Hs', name: 'Hassium',      atomicNumber: 108, period: 7,  group: 8,  category: 'transition-metal' },
    { symbol: 'Mt', name: 'Meitnerium',   atomicNumber: 109, period: 7,  group: 9,  category: 'unknown' },
    { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, period: 7,  group: 10, category: 'unknown' },
    { symbol: 'Rg', name: 'Roentgenium',  atomicNumber: 111, period: 7,  group: 11, category: 'unknown' },
    { symbol: 'Cn', name: 'Copernicium',  atomicNumber: 112, period: 7,  group: 12, category: 'unknown' },
    { symbol: 'Nh', name: 'Nihonium',     atomicNumber: 113, period: 7,  group: 13, category: 'unknown' },
    { symbol: 'Fl', name: 'Flerovium',    atomicNumber: 114, period: 7,  group: 14, category: 'unknown' },
    { symbol: 'Mc', name: 'Moscovium',    atomicNumber: 115, period: 7,  group: 15, category: 'unknown' },
    { symbol: 'Lv', name: 'Livermorium',  atomicNumber: 116, period: 7,  group: 16, category: 'unknown' },
    { symbol: 'Ts', name: 'Tennessine',   atomicNumber: 117, period: 7,  group: 17, category: 'unknown' },
    { symbol: 'Og', name: 'Oganesson',    atomicNumber: 118, period: 7,  group: 18, category: 'unknown' }
  ];


  selected: string[] = [];

  toggle(el: string) {

    const index = this.selected.indexOf(el);
    if (index > -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(el);
    }
    
    this.elementSelected.emit([...this.selected]);

  }

  readonly dialogRef = inject(MatDialogRef<PeriodicTable>);

}

