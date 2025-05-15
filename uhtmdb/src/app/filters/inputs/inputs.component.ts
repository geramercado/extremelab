import { Component } from '@angular/core';

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
  styleUrl: './inputs.component.css'
})
export class InputsComponent {

}
