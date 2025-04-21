import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


import { FooterComponent } from '../../mainPage/footer/footer.component';


@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    FooterComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {

}
