import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BitFormsModule, BitLayoutModule } from '../../../../projects/bitblocks/src/public-api';
import { CodeSnippetComponent } from '../../core/code-snippet/code-snippet.component';
import { TableOfContentComponent } from '../../core/table-of-content/table-of-content.component';
// import { BitFormsModule } from 'bitblocks';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BitFormsModule,
    CodeSnippetComponent,
    TableOfContentComponent,
    BitLayoutModule
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

  moduleCode =
    `import { BitFormsModule } from 'bitblocks';
 
  @Component({
    selector: 'app-forms',
    standalone: true,
    imports: [
      BitFormsModule,
    ],
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.css'
 })`


  BitRegExpression = {
    AlphabetsOnly: /^[A-Za-z ]+$/,
    Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  }
}
