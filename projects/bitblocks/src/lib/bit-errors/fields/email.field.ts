import { AbstractControl } from "@angular/forms";
import { BitRegEx } from "../../core/utility/bit.regex";
import { BitErrorStrategy } from "../interfaces/error.strategy";
import { BitErrors } from "../interfaces/error.type";


export class BitFieldEmail implements BitErrorStrategy {

    validate(control: AbstractControl, errors: BitErrors) {

        if (control.value && !BitRegEx.Email.test(control.value))
            errors.email = true;

        return errors;
    };
}
