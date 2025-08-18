import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BitFormService {
  private isRequired<T>(
    form: FormGroup<{ [K in keyof T]: FormControl<T[K]> }>,
    key: keyof T
  ): boolean {
    return form.controls[key].hasValidator(Validators.required);
  }

  private isDirty<T>(
    form: FormGroup<{ [K in keyof T]: FormControl<T[K]> }>,
    key: keyof T
  ): boolean {
    return form.controls[key].dirty;
  }

  public control<T>(
    form: FormGroup<{ [K in keyof T]: FormControl<T[K]> }>,
    key: keyof T
  ) {
    return {
      required: this.isRequired(form, key),
      dirty: this.isDirty(form, key),
    };
  }
}
