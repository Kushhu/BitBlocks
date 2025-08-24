import { Directive, HostBinding, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { BitRegEx } from '../../../core/utility/bit.regex';
import { BitTextboxDirective } from '../text/bit-textbox.directive';

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

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  @HostBinding('class.bit-input-invalid')
  invalid = false;

  @HostBinding('class.bit-input-valid')
  valid = false;

  override validate(control: AbstractControl): ValidationErrors | null {
    const minLength = this.input.nativeElement.minLength;
    const maxLength = this.input.nativeElement.maxLength;

    if (control.hasValidator(Validators.required) && !control.value && control.dirty) {
      this.invalid = true;
      this.valid = false;
    }

    if (minLength > 0)

      if (minLength <= control.value.length) {
        this.valid = true;
        this.invalid = false;
      }
      else {
        if (!control.dirty) return null;
        this.invalid = true;
        this.valid = false;
      }

    if (maxLength > 0)

      if (control.value.length >= maxLength) {
        this.valid = true;
        this.invalid = false;
      } else {
        if (!control.dirty) return null;
        this.invalid = true;
        this.valid = false;
      }

    return null;
  }

}

// { "minlength": { "requiredLength": 10, "actualLength": 2 }, "minLength": 2 } 
