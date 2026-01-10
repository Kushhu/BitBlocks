import { Directive, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BaseTextbox } from '../../base.textbox';
import { BitErrors, BitFieldRange, BitFieldRequired, BitFieldValidator } from '../../../bit-errors';

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
export class BitPhoneDirective extends BaseTextbox {

  constructor() {
    super();
    this.setup();
  }

  setup() {
    this.add.attribute('type', 'tel')
    this.add.attribute('autocomplete', 'mobile');
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  override validate(control: AbstractControl): ValidationErrors | null {
    const minLength = this.input.nativeElement.minLength;
    const maxLength = this.input.nativeElement.maxLength;

    const field = new BitFieldValidator([new BitFieldRequired()]);

    const errors = field.validate(control);
    
    if (control.pristine) return errors;

    if (this.hasErrors(errors)) this.makeInvalid();

    if (!this.hasErrors(errors)) this.makeValid();

    return errors;
  }

  hasErrors = (errors: BitErrors) => Object.keys(errors).length


}
