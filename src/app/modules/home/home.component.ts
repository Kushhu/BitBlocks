import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleFormsComponent } from '../forms/example.forms/example.forms.component';
import { BitFormService, BitFormsModule } from '../../../../projects/bitblocks/src/public-api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BitFormsModule, ReactiveFormsModule, ExampleFormsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  _bitHelper = inject(BitFormService);

  BitRegExpression = {
    AlphabetsOnly: /^[A-Za-z ]+$/,
    Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  }

}
