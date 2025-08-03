import { Directive, ElementRef, inject, Renderer2 } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Directive()
export abstract class BaseTextbox implements Validator {

    private input: ElementRef<HTMLInputElement> = inject(ElementRef<HTMLInputElement>);
    public renderer: Renderer2 = inject(Renderer2);

    constructor() {
        this.add.classList('bit-textbox');
    }

    abstract validate(control: AbstractControl): ValidationErrors | null;

    get add() {
        const attribute = (name: string, value: string) => this.renderer.setAttribute(this.input.nativeElement, name, value);
        const classList = (name: string) => this.renderer.addClass(this.input.nativeElement, name);

        return { attribute, classList };
    }

    get remove() {
        const attribute = (name: string) => this.renderer.removeAttribute(this.input.nativeElement, name);
        const classList = (name: string) => this.renderer.removeClass(this.input.nativeElement, name);

        return { attribute, classList };
    }



}