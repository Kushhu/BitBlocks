import { Directive, OnChanges, SimpleChanges } from '@angular/core';
import { BitTextboxDirective } from '../text/bit-textbox.directive';
import { BitRegEx } from '../../../core/utils/bit.regex';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[bitEmail]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BitEmailboxDirective,
      multi: true,
    },
  ]
})
export class BitEmailboxDirective extends BitTextboxDirective implements OnChanges {

  constructor() {
    super();
    this.setup();
  }

  setup() {
    this.regExp = BitRegEx.Email;
    this.add.attribute('type', 'email');
    this.add.attribute('autocomplete', 'email');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['regExp'].firstChange) {
      console.warn('Default Email Validation Overriden! : bitEmail.regEx externaly provided')
    }
  }

}
