import { Directive } from '@angular/core';
import { BitBaseButton } from '../base.button';

@Directive({
  selector: '[bitIconButton]',
  standalone: true
})
export class BitIconButtonDirective extends BitBaseButton {

  constructor() {
    super('bit-icon-btn');
  }

}
