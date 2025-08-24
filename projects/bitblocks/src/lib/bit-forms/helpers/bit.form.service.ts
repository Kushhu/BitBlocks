import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type BitFormGroup<T> = FormGroup<{ [K in keyof T]: FormControl<T[K]> }>;

@Injectable({
  providedIn: 'root',
})
export class BitFormService {

  public control<T, K extends keyof T>(form: BitFormGroup<T>, key: K) {
    return {
      valid: form.controls[key].valid,
      dirty: form.controls[key].dirty,
      touched: form.controls[key].touched,
      required: form.controls[key].hasValidator(Validators.required),
      anyError: form.controls[key].valid || !form.controls[key].touched
    };
  }

  error<T, K extends keyof T>(form: BitFormGroup<T>, key: K) {
    return form.controls[key].errors
  }
}
