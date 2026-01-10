import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleFormsComponent } from '../forms/example.forms/example.forms.component';
import { Form } from '@module/forms/example.forms/form.model';
import { BitButtonModule, BitFormService, BitFormsModule } from 'bitblocks';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BitFormsModule, BitButtonModule, ReactiveFormsModule, ExampleFormsComponent,
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


  loading = false;
  disable = true;

  submit() {
    this.loading = true;
    this.disable = true;
    setTimeout(() => {
      this.disable = false;
      this.loading = false;
    }, 1500);
  }

  formModel = Form;

}
