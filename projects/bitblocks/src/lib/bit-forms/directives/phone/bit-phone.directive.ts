import { Directive, HostListener } from '@angular/core';
import { BitTextboxDirective } from '../text/bit-textbox.directive';
import { NG_VALIDATORS } from '@angular/forms';
import { BitRegEx } from '../../../core/utils/bit.regex';

@Directive({
  selector: '[bitPhone]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BitPhoneDirective,
      multi: true,
    },
  ]
})
export class BitPhoneDirective extends BitTextboxDirective {

  constructor() {
    super();
    this.setup();
  }

  setup() {
    this.regExp = BitRegEx.Phone;
    this.add.attribute('type', 'tel')
    this.add.attribute('autocomplete', 'mobile');
  }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

}
