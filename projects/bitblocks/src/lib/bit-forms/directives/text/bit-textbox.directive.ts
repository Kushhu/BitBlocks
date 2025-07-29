import { Directive, ElementRef, forwardRef, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

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
export class BitTextboxDirective implements Validator, OnInit {

  @Input() regExp?: RegExp;

  constructor() { }

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

  add(name: string) {
    this.input.nativeElement.classList.add(name);
  }

  remove(name: string) {
    this.input.nativeElement.classList.remove(name);
  }

  protected input: ElementRef<HTMLInputElement> = inject(ElementRef<HTMLInputElement>);

  ngOnInit(): void {
    this.add('bit-textbox');
  }
}
