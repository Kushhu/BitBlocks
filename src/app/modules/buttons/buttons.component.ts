import { Component } from '@angular/core';
import { TableOfContentComponent } from '@shared/table-of-content/table-of-content.component'
import { BitButtonModule } from 'bitblocks';
import { CodeSnippetComponent } from "@shared/code-snippet/code-snippet.component";

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [BitButtonModule, TableOfContentComponent, CodeSnippetComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  loading = false;
  disable = false;

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
