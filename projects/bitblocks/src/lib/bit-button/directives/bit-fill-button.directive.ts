import { Directive } from '@angular/core';
import { BitBaseButton } from '../base.button';

@Directive({
  selector: '[bitFillButton]',
  standalone: true
})
export class BitFillButtonDirective extends BitBaseButton {

  constructor() { super('bit-fill-btn') }

}
