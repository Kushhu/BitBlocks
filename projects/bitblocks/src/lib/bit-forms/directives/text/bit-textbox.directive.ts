import { Directive, ElementRef, forwardRef, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
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
export class BitTextboxDirective extends BaseTextbox implements OnInit {

  @Input() regExp?: RegExp;
  @Input() max?: number;
  @Input() min?: number;

  ngOnInit(): void {
    this.input.nativeElement.type = "text";
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value || control.value == "") {
      this.remove('bit-input-invalid')
      this.remove('bit-input-valid')
      return null;
    }

    if (this.regExp?.test(control.value)) {
      this.remove('bit-input-invalid');
      this.add('bit-input-valid');
      return null;
    }

    this.remove('bit-input-valid');
    this.add('bit-input-invalid');
    return { pattern: true }
  }

}
