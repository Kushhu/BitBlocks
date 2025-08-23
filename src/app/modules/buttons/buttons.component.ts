import { Component } from '@angular/core';
import { BitButtonModule } from '../../../../projects/bitblocks/src/lib/bit-button/bit-button.module';
import { TableOfContentComponent } from '@shared/table-of-content/table-of-content.component'

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
    this.disable = true;
    setTimeout(() => {
      this.disable = false;
      this.loading = false;
    }, 1500);
  }
}
