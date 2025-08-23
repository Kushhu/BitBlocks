import { Directive } from '@angular/core';
import { BitBaseButton } from '../base.button';

@Directive({
  selector: '[bitTextButton]',
  standalone: true
})
export class BitTextButtonDirective extends BitBaseButton {

  constructor() { super('bit-text-btn') }

}
