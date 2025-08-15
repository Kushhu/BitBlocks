import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { BitDropdownModule, BitFormService, BitFormsModule, BitSeparatorComponent } from 'bitblocks';
import { Form } from './form.model';
import { BitDropdownModule, BitFormService, BitFormsModule, BitSeparatorComponent } from '../../../../../projects/bitblocks/src/public-api';
import { CodeSnippetComponent } from '../../../core/shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-example-forms',
  standalone: true,
  imports: [ReactiveFormsModule, BitFormsModule, CommonModule, CodeSnippetComponent, BitDropdownModule, BitSeparatorComponent],
  templateUrl: './example.forms.component.html',
  styleUrl: './example.forms.component.css'
})
export class ExampleFormsComponent {
  _bitHelper = inject(BitFormService);

  formModel = Form;

  BitRegExpression = {
    AlphabetsOnly: /^[A-Za-z ]+$/,
    Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  }
}
