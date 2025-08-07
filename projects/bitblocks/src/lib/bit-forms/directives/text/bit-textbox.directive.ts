import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BaseTextbox } from '../../../core/base.textbox';

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
    if (!control.value || control.value == "") {
      this.default();
      return null;
    }

    if (!this.regExp) return null;

    if (this.regExp?.test(control.value)) {
      this.makeValid();
      return null;
    }

    this.makeInvalid();
    this.postValidate();
    return { pattern: true }
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
