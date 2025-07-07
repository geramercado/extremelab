import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

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

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';


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
    CardsButtonComponent
],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputsComponent {

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PeriodicTable, {
      width: '90vw',
      height: '90vh',
      maxWidth: '100vw',
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
    MatButtonModule, MatDialogActions, MatDialogClose
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodicTable {
  readonly dialogRef = inject(MatDialogRef<PeriodicTable>);
}

