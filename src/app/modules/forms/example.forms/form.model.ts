import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Form {
    create() {

    }

    static form = new FormGroup({
        Name: new FormControl('', [Validators.required]),
        Email: new FormControl(),
        Phone: new FormControl(),
        Date: new FormControl('', [Validators.required]),
        Person: new FormControl('Olivia Rossi'),
        Categories: new FormControl([1,2,3,4,5,6,7,8,9,10])
    })
}