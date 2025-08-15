import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BitFormService, BitFormsModule } from 'bitblocks';
import { ExampleFormsComponent } from '../forms/example.forms/example.forms.component';

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
