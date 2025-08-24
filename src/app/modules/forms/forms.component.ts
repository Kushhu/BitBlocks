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

  dropdownCode = 
  `<bit-dropdown 
  formControlName="Person"
  id="person" 
  [minHeight]="2" 
  [searchable]="true" 
  placeholder="Select person">

  // option template iteration
  @for (user of users$ | async; track user.id;let i = $index) {
    <bit-option [value]="user.name">

        <div class="flex middle">
            <img [ngSrc]="'https://avatar.iran.liara.run/public/' + user.id" height="36" width="36" />
            <div>
                {{ user.name }}
                <br />
                <small style="opacity: 0.5">
                    {{ user.email }}
                </small>
            </div>
        </div>

    </bit-option>
  }
</bit-dropdown>`
}
