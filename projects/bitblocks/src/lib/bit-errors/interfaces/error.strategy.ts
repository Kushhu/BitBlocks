import { AbstractControl } from "@angular/forms";
import { BitErrors } from "./error.type";

export abstract class BitErrorStrategy {
    abstract validate: (control: AbstractControl, errors: BitErrors) => void;
}

