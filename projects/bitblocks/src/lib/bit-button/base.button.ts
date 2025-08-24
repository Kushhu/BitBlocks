import { Directive, effect, ElementRef, HostBinding, inject, Input, input, Renderer2 } from '@angular/core';

const BTN_CORE_CLASS = "bit-btn"
const BTN_DISABLE_CLASS = "bit-btn-disable"
const BTN_LOADING_CLASS = "bit-btn-loading"

@Directive()
export abstract class BitBaseButton {

  @HostBinding(`class.${BTN_LOADING_CLASS}`)
  private isLoading!: boolean;

  @Input() public set loading(state: boolean) {
    if (state) {
      this.disable()
      this.isLoading = true;
      this.disabled = true;
    }
    if (!state) {
      this.enable()
      this.isLoading = false;
      this.disabled = false;
    }
  }

  @HostBinding('ariaDisabled')
  @HostBinding(`class.${BTN_DISABLE_CLASS}`)
  @Input() public disabled!: boolean;

  @HostBinding('style.minWidth')
  @Input()
  width!: string;

  @HostBinding('style.color')
  @Input()
  textColor!: string

  @HostBinding('ariaLabel')
  @Input()
  label!: string;

  private button: ElementRef<HTMLButtonElement> = inject(ElementRef<HTMLButtonElement>);
  private renderer = inject(Renderer2);

  constructor(className: string) {
    this.add.classList(BTN_CORE_CLASS);
    this.add.classList(className);

    this.renderSpanElement();
  }

  renderSpanElement() {
    const span = this.renderer.createElement('span');
    this.renderer.appendChild(this.button.nativeElement, span)
  }

  enable() {
    this.remove.classList(BTN_DISABLE_CLASS);
  }

  disable() {
    this.add.classList(BTN_DISABLE_CLASS);
  }

  get add() {
    const attribute = (name: string, value: string) => this.renderer.setAttribute(this.button.nativeElement, name, value);
    const classList = (name: string) => this.renderer.addClass(this.button.nativeElement, name);
    const style = (name: string, value: string) => this.renderer.setStyle(this.button.nativeElement, name, value);

    return { attribute, classList, style };
  }

  get remove() {
    const attribute = (name: string) => this.renderer.removeAttribute(this.button.nativeElement, name);
    const classList = (name: string) => this.renderer.removeClass(this.button.nativeElement, name);
    const style = (name: string) => this.renderer.removeStyle(this.button.nativeElement, name);

    return { attribute, classList, style };
  }

}
