import { Directive } from '@angular/core';
import { BitBaseButton } from '../base.button';

@Directive({
  selector: '[bitOutlinedButton]',
  standalone: true
})
export class BitOutlinedButtonDirective extends BitBaseButton {

  constructor() {
    super('bit-outlined-btn');
  }

}
