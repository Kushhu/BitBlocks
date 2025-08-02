import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BitFormsModule } from '../../../../projects/bitblocks/src/public-api';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../../core/code-snippet/code-snippet.component';
// import { BitFormsModule } from 'bitblocks';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BitFormsModule,
    CodeSnippetComponent
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  form = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl(),
    Phone: new FormControl(),
  })

  BitRegExpression = {
    AlphabetsOnly: /^[A-Za-z ]+$/,
    Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  }
}
