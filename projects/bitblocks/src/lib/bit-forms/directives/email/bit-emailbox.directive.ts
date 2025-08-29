import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BaseTextbox } from '../../base.textbox';
import { BitFieldValidator, BitFieldRequired, BitFieldEmail, BitErrors } from '../../../bit-errors';

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
export class BitEmailboxDirective extends BaseTextbox {

  constructor() {
    super();
  }

  setup() {
    this.add.attribute('type', 'email');
    this.add.attribute('autocomplete', 'email');
  }

  validate(control: AbstractControl): ValidationErrors | null {

    const field = new BitFieldValidator([new BitFieldRequired(), new BitFieldEmail()]);

    const errors = field.validate(control);

    if (control.pristine) return errors;

    if (this.hasErrors(errors)) this.makeInvalid();

    if (!this.hasErrors(errors)) this.makeValid();

    // if (!control.value && !errors.required) this.makeValid();

    return errors;
  }

  hasErrors = (errors: BitErrors) => Object.keys(errors).length;

}
