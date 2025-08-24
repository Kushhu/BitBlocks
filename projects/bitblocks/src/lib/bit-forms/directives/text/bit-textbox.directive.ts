import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { BaseTextbox } from '../../base.textbox';

@Directive({
  selector: '[bitTextbox]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BitTextboxDirective,
      multi: true,
    },
  ]
})
export class BitTextboxDirective extends BaseTextbox {

  @Input() regExp?: RegExp;
  @Input() max?: number;
  @Input() min?: number;

  validate(control: AbstractControl): ValidationErrors | null {

    if (control.hasValidator(Validators.required) && !control.value && control.dirty) {
      this.makeInvalid();
      return null;
    }

    if (this.regExp)

      if (!this.regExp?.test(control.value) && control.value) {
        this.makeInvalid();
        return { email: true };
      }

    if (control.dirty) this.makeValid();

    this.postValidate();
    return null;
  }

  postValidate() { }

  makeValid() {
    this.remove.classList('bit-input-invalid');
    this.add.classList('bit-input-valid');
  }

  makeInvalid() {
    this.remove.classList('bit-input-valid');
    this.add.classList('bit-input-invalid');
  }

  default() {
    this.remove.classList('bit-input-invalid')
    this.remove.classList('bit-input-valid')
  }

}
