import { AbstractControl } from "@angular/forms";
import { BitErrorStrategy } from "../interfaces/error.strategy";
import { BitErrors } from "../interfaces/error.type";

export class BitFieldRange implements BitErrorStrategy {

    constructor(private min: number | null | undefined, private max: number | null | undefined) { }

    validate(control: AbstractControl, errors: BitErrors) {

        if (this.min) control.value?.length < this.min ? errors.min = this.min : delete errors.min;

        if (this.max) control.value?.length > this.max ? errors.max = this.max : delete errors.max;

        return errors;
    };
}