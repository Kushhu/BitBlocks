import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleFormsComponent } from './example.forms/example.forms.component';
import { CodeSnippetComponent } from '@shared/code-snippet/code-snippet.component';
import { TableOfContentComponent } from '@shared/table-of-content/table-of-content.component';
// import { BitFormsModule } from 'bitblocks';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExampleFormsComponent,
    CodeSnippetComponent,
    TableOfContentComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
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

  dropdownCode = `<bit-dropdown id="person">
    <bit-option [value]="1"> Kushagra </bit-option>
    <bit-option [value]="2"> Ramni </bit-option>
    <bit-option [value]="3"> Yash </bit-option>
    <bit-option [value]="4"> Vinit </bit-option>
</bit-dropdown>`
}
