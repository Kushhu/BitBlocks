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
    this.add.attribute('type', 'tel');
  }

  override validate(control: AbstractControl): ValidationErrors | null {

    const validator = new BitFieldValidator([new BitFieldRequired(), new BitFieldRange(null, 10)])

    const errors = validator.validate(control);

    if (this.hasErrors(errors)) this.makeInvalid();

    if (!this.hasErrors(errors)) this.makeValid();

    return errors;
  }

  hasErrors = (errors: BitErrors) => Object.keys(errors).length

}
