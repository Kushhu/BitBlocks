import { AbstractControl, Validators } from "@angular/forms";
import { BitErrorStrategy } from "../interfaces/error.strategy";
import { BitErrors } from "../interfaces/error.type";


export class BitFieldRequired implements BitErrorStrategy {

    validate(control: AbstractControl, errors: BitErrors) {
        if (control.hasValidator(Validators.required) && control.value == null) {
            errors.required = true;
        }
        return errors;
    };
}
