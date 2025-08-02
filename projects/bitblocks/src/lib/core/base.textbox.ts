import { Directive, ElementRef, inject, OnInit } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Directive()
export abstract class BaseTextbox implements Validator, OnInit {

    protected input: ElementRef<HTMLInputElement> = inject(ElementRef<HTMLInputElement>);

    ngOnInit(): void {
        this.add('bit-textbox');
    }

    abstract validate(control: AbstractControl): ValidationErrors | null;

    add(name: string) {
        this.input.nativeElement.classList.add(name);
    }

    remove(name: string) {
        this.input.nativeElement.classList.remove(name);
    }

}