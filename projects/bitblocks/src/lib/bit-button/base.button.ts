import { AfterViewInit, Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

const BTN_CORE_CLASS = "bit-btn"
const BTN_DISABLE_CLASS = "bit-btn-disable"
const BTN_LOADING_CLASS = "bit-btn-loading"

@Directive()
export abstract class BitBaseButton implements AfterViewInit {

  isDisable = input<boolean>();
  isLoading = input<boolean>();
  loadingText = input<string>();
  width = input<string>();

  private button: ElementRef<HTMLButtonElement> = inject(ElementRef<HTMLButtonElement>);
  private renderer = inject(Renderer2);

  constructor(className: string) {
    this.add.classList(BTN_CORE_CLASS);
    this.add.classList(className);

    this.renderSpanElement();

    this.trackLoader();
    this.trackDisabled();
  }

  trackLoader() {
    effect(() => {
      if (this.isLoading()) {
        this.add.classList(BTN_LOADING_CLASS);
        this.disable();
      }

      if (!this.isLoading()) {
        this.remove.classList(BTN_LOADING_CLASS);
        this.enable();
      }
    })
  }

  trackDisabled() {
    effect(() => {
      if (this.isDisable()) this.disable();
      else this.enable();
    })
  }

  renderSpanElement() {
    const span = this.renderer.createElement('span');
    this.renderer.appendChild(this.button.nativeElement, span)
  }

  ngAfterViewInit(): void {
    const width = this.width();
    if (width) this.add.style('width', width)
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
