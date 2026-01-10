import { Component } from '@angular/core';
import { TableOfContentComponent } from '@shared/table-of-content/table-of-content.component'
import { BitButtonModule } from 'bitblocks';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [BitButtonModule, TableOfContentComponent],
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
