import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class BitFormService {

    isRequired<T>(form: FormGroup<{ [K in keyof T]: FormControl<T[K]>; }>, key: keyof T): boolean {
        return form.controls[key].hasValidator(Validators.required);
    }

    isDirty<T>(form: FormGroup<{ [K in keyof T]: FormControl<T[K]>; }>, key: keyof T): boolean {
        return form.controls[key].dirty;
    }

}