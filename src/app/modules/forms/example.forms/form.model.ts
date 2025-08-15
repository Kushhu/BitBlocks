import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Form {
    create() {

    }

    static form = new FormGroup({
        Name: new FormControl('', [Validators.required]),
        Email: new FormControl(),
        Phone: new FormControl(),
        Date: new FormControl('', [Validators.required]),
        Person: new FormControl(null, [Validators.required])
    })
}