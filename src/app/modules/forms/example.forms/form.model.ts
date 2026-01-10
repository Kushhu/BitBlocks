import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Form {
    create() {

    }

    static form = new FormGroup({
        Name: new FormControl(null, [Validators.required]),
        Email: new FormControl(null, []),
        Phone: new FormControl(null, [Validators.required]),
        Date: new FormControl(null, [Validators.required]),
        Person: new FormControl(null),
        TeamMembers: new FormControl(null, [Validators.required])
    })
}