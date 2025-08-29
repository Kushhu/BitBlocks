import { AbstractControl } from "@angular/forms";
import { BitErrorStrategy } from "./interfaces/error.strategy";
import { BitErrors } from "./interfaces/error.type";

export class BitFieldValidator {

    constructor(public _strategies: BitErrorStrategy[]) { }

    validate(control: AbstractControl): BitErrors {
        let errors: BitErrors = {};
        this._strategies.map(strategy => strategy.validate(control, errors));
        return errors;
    };

}