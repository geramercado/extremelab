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

  @Output() elementSelected = new EventEmitter<string[]>();

  elements = [
    { symbol: 'H',  period: 1, group: 1,  category: 'nonmetal' },
  { symbol: 'He', period: 1, group: 18, category: 'noble-gas' },
  { symbol: 'Li', period: 2, group: 1,  category: 'alkali-metal' },
  { symbol: 'Be', period: 2, group: 2,  category: 'alkaline-earth-metal' },
  { symbol: 'B',  period: 2, group: 13, category: 'metalloid' },
  { symbol: 'C',  period: 2, group: 14, category: 'nonmetal' },
  { symbol: 'N',  period: 2, group: 15, category: 'nonmetal' },
  { symbol: 'O',  period: 2, group: 16, category: 'nonmetal' },
  { symbol: 'F',  period: 2, group: 17, category: 'halogen' },
  { symbol: 'Ne', period: 2, group: 18, category: 'noble-gas' },
  { symbol: 'Na', period: 3, group: 1,  category: 'alkali-metal' },
  { symbol: 'Mg', period: 3, group: 2,  category: 'alkaline-earth-metal' },
  { symbol: 'Al', period: 3, group: 13, category: 'post-transition-metal' },
  { symbol: 'Si', period: 3, group: 14, category: 'metalloid' },
  { symbol: 'P',  period: 3, group: 15, category: 'nonmetal' },
  { symbol: 'S',  period: 3, group: 16, category: 'nonmetal' },
  { symbol: 'Cl', period: 3, group: 17, category: 'halogen' },
  { symbol: 'Ar', period: 3, group: 18, category: 'noble-gas' },
  { symbol: 'K',  period: 4, group: 1,  category: 'alkali-metal' },
  { symbol: 'Ca', period: 4, group: 2,  category: 'alkaline-earth-metal' },
  { symbol: 'Sc', period: 4, group: 3,  category: 'transition-metal' },
  { symbol: 'Ti', period: 4, group: 4,  category: 'transition-metal' },
  { symbol: 'V',  period: 4, group: 5,  category: 'transition-metal' },
  { symbol: 'Cr', period: 4, group: 6,  category: 'transition-metal' },
  { symbol: 'Mn', period: 4, group: 7,  category: 'transition-metal' },
  { symbol: 'Fe', period: 4, group: 8,  category: 'transition-metal' },
  { symbol: 'Co', period: 4, group: 9,  category: 'transition-metal' },
  { symbol: 'Ni', period: 4, group: 10, category: 'transition-metal' },
  { symbol: 'Cu', period: 4, group: 11, category: 'transition-metal' },
  { symbol: 'Zn', period: 4, group: 12, category: 'transition-metal' },
  { symbol: 'Ga', period: 4, group: 13, category: 'post-transition-metal' },
  { symbol: 'Ge', period: 4, group: 14, category: 'metalloid' },
  { symbol: 'As', period: 4, group: 15, category: 'metalloid' },
  { symbol: 'Se', period: 4, group: 16, category: 'nonmetal' },
  { symbol: 'Br', period: 4, group: 17, category: 'halogen' },
  { symbol: 'Kr', period: 4, group: 18, category: 'noble-gas' },
  { symbol: 'Rb', period: 5, group: 1,  category: 'alkali-metal' },
  { symbol: 'Sr', period: 5, group: 2,  category: 'alkaline-earth-metal' },
  { symbol: 'Y',  period: 5, group: 3,  category: 'transition-metal' },
  { symbol: 'Zr', period: 5, group: 4,  category: 'transition-metal' },
  { symbol: 'Nb', period: 5, group: 5,  category: 'transition-metal' },
  { symbol: 'Mo', period: 5, group: 6,  category: 'transition-metal' },
  { symbol: 'Tc', period: 5, group: 7,  category: 'transition-metal' },
  { symbol: 'Ru', period: 5, group: 8,  category: 'transition-metal' },
  { symbol: 'Rh', period: 5, group: 9,  category: 'transition-metal' },
  { symbol: 'Pd', period: 5, group: 10, category: 'transition-metal' },
  { symbol: 'Ag', period: 5, group: 11, category: 'transition-metal' },
  { symbol: 'Cd', period: 5, group: 12, category: 'transition-metal' },
  { symbol: 'In', period: 5, group: 13, category: 'post-transition-metal' },
  { symbol: 'Sn', period: 5, group: 14, category: 'post-transition-metal' },
  { symbol: 'Sb', period: 5, group: 15, category: 'metalloid' },
  { symbol: 'Te', period: 5, group: 16, category: 'metalloid' },
  { symbol: 'I',  period: 5, group: 17, category: 'halogen' },
  { symbol: 'Xe', period: 5, group: 18, category: 'noble-gas' },
  { symbol: 'Cs', period: 6, group: 1,  category: 'alkali-metal' },
  { symbol: 'Ba', period: 6, group: 2,  category: 'alkaline-earth-metal' },
  { symbol: 'La', period: 9, group: 4,  category: 'lanthanide' },
  { symbol: 'Ce', period: 9, group: 5,  category: 'lanthanide' },
  { symbol: 'Pr', period: 9, group: 6,  category: 'lanthanide' },
  { symbol: 'Nd', period: 9, group: 7,  category: 'lanthanide' },
  { symbol: 'Pm', period: 9, group: 8,  category: 'lanthanide' },
  { symbol: 'Sm', period: 9, group: 9,  category: 'lanthanide' },
  { symbol: 'Eu', period: 9, group: 10, category: 'lanthanide' },
  { symbol: 'Gd', period: 9, group: 11, category: 'lanthanide' },
  { symbol: 'Tb', period: 9, group: 12, category: 'lanthanide' },
  { symbol: 'Dy', period: 9, group: 13, category: 'lanthanide' },
  { symbol: 'Ho', period: 9, group: 14, category: 'lanthanide' },
  { symbol: 'Er', period: 9, group: 15, category: 'lanthanide' },
  { symbol: 'Tm', period: 9, group: 16, category: 'lanthanide' },
  { symbol: 'Yb', period: 9, group: 17, category: 'lanthanide' },
  { symbol: 'Lu', period: 9, group: 18, category: 'lanthanide' },
  { symbol: 'Hf', period: 6, group: 4,  category: 'transition-metal' },
  { symbol: 'Ta', period: 6, group: 5,  category: 'transition-metal' },
  { symbol: 'W',  period: 6, group: 6,  category: 'transition-metal' },
  { symbol: 'Re', period: 6, group: 7,  category: 'transition-metal' },
  { symbol: 'Os', period: 6, group: 8,  category: 'transition-metal' },
  { symbol: 'Ir', period: 6, group: 9,  category: 'transition-metal' },
  { symbol: 'Pt', period: 6, group: 10, category: 'transition-metal' },
  { symbol: 'Au', period: 6, group: 11, category: 'transition-metal' },
  { symbol: 'Hg', period: 6, group: 12, category: 'transition-metal' },
  { symbol: 'Tl', period: 6, group: 13, category: 'post-transition-metal' },
  { symbol: 'Pb', period: 6, group: 14, category: 'post-transition-metal' },
  { symbol: 'Bi', period: 6, group: 15, category: 'post-transition-metal' },
  { symbol: 'Po', period: 6, group: 16, category: 'metalloid' },
  { symbol: 'At', period: 6, group: 17, category: 'halogen' },
  { symbol: 'Rn', period: 6, group: 18, category: 'noble-gas' },
  { symbol: 'Fr', period: 7, group: 1,  category: 'alkali-metal' },
  { symbol: 'Ra', period: 7, group: 2,  category: 'alkaline-earth-metal' },
  { symbol: 'Ac', period: 10, group: 4,  category: 'actinide' },
  { symbol: 'Th', period: 10, group: 5,  category: 'actinide' },
  { symbol: 'Pa', period: 10, group: 6,  category: 'actinide' },
  { symbol: 'U',  period: 10, group: 7,  category: 'actinide' },
  { symbol: 'Np', period: 10, group: 8,  category: 'actinide' },
  { symbol: 'Pu', period: 10, group: 9,  category: 'actinide' },
  { symbol: 'Am', period: 10, group: 10, category: 'actinide' },
  { symbol: 'Cm', period: 10, group: 11, category: 'actinide' },
  { symbol: 'Bk', period: 10, group: 12, category: 'actinide' },
  { symbol: 'Cf', period: 10, group: 13, category: 'actinide' },
  { symbol: 'Es', period: 10, group: 14, category: 'actinide' },
  { symbol: 'Fm', period: 10, group: 15, category: 'actinide' },
  { symbol: 'Md', period: 10, group: 16, category: 'actinide' },
  { symbol: 'No', period: 10, group: 17, category: 'actinide' },
  { symbol: 'Lr', period: 10, group: 18, category: 'actinide' },
  { symbol: 'Rf', period: 7, group: 4,  category: 'transition-metal' },
  { symbol: 'Db', period: 7, group: 5,  category: 'transition-metal' },
  { symbol: 'Sg', period: 7, group: 6,  category: 'transition-metal' },
  { symbol: 'Bh', period: 7, group: 7,  category: 'transition-metal' },
  { symbol: 'Hs', period: 7, group: 8,  category: 'transition-metal' },
  { symbol: 'Mt', period: 7, group: 9,  category: 'unknown' },
  { symbol: 'Ds', period: 7, group: 10, category: 'unknown' },
  { symbol: 'Rg', period: 7, group: 11, category: 'unknown' },
  { symbol: 'Cn', period: 7, group: 12, category: 'unknown' },
  { symbol: 'Nh', period: 7, group: 13, category: 'unknown' },
  { symbol: 'Fl', period: 7, group: 14, category: 'unknown' },
  { symbol: 'Mc', period: 7, group: 15, category: 'unknown' },
  { symbol: 'Lv', period: 7, group: 16, category: 'unknown' },
  { symbol: 'Ts', period: 7, group: 17, category: 'unknown' },
  { symbol: 'Og', period: 7, group: 18, category: 'unknown' }
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

