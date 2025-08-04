import { Component } from '@angular/core';

@Component({
  selector: 'bit-separator',
  standalone: true,
  template: '<div class="bit-separator"></div>',
  styles: `.bit-separator {
                width: 100%;
                margin-top: 1rem;
                margin-bottom: 0.5rem;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }`
})
export class BitSeparatorComponent {

}
