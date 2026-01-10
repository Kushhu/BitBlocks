import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BaseTextbox } from '../../base.textbox';
import { BitFieldValidator, BitFieldRequired, BitFieldRange, BitErrors } from '../../../bit-errors';

@Directive({
  selector: '[bitNumberbox]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BitNumberboxDirective,
      multi: true,
    },
  ]
})
export class BitNumberboxDirective extends BaseTextbox {

  constructor() {
    super();
    this.setup();
  }

  setup() {
    this.add.attribute('type', 'number');
  }

  override validate(control: AbstractControl): ValidationErrors | null {

    const validator = new BitFieldValidator([new BitFieldRequired()])

    const errors = validator.validate(control);

    if (control.pristine) return errors;

    if (this.hasErrors(errors)) this.makeInvalid();

    if (!this.hasErrors(errors)) this.makeValid();

    return errors;
  }

  hasErrors = (errors: BitErrors) => Object.keys(errors).length

}
